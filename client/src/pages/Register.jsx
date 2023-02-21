import React, { useState } from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import axios from "axios";
import { registerRoute } from "../utils/APis";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState(null);
  function HandleImage(e) {
    let file = e.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let result = fileReader.result;
      setImage(result);
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  function HandleData(e) {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function HandleRegister() {
    let { username, email, password } = data;
    if (image && username && email && password) {
      try {
        let obj = {
          image,
          username,
          email,
          password,
        };
        let { data } = await axios.post(registerRoute, obj);
        if (data.status === 201) {
          toast.success(data.msg);
          navigate("/login");
        } else {
          toast.error(data.msg);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("please fill all fields!");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form>
        <label htmlFor="image-tag">
          {image ? <img src={image} alt="profile" /> : <CgProfile size={100} />}
        </label>
        <input
          value={data.image}
          type="file"
          name="image"
          id="image-tag"
          style={{ display: "none" }}
          onChange={HandleImage}
          accept="image/*"
        />

        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          onChange={HandleData}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={HandleData}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={HandleData}
        />
        <button onClick={HandleRegister}>Register</button>
      </Form>
    </div>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 12px;
  width: 600px;
  border: 1px solid grey;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  label {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  input {
    padding: 8px 2px;
    outline: none;
    font-size: 20px;
  }
  button {
    align-self: center;
    padding: 6px 8px;
    font-size: 24px;
  }
`;

export default Register;
