import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";
import { LoginRoute } from "../utils/APis";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function HandleData(e) {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function HandleLogin() {
    const { email, password } = data;

    if (email && password) {
      try {
        let response = await axios.post(LoginRoute, data);
        if (response?.data?.status === 200) {
          localStorage.setItem("user", response?.data?.data._id);
          localStorage.setItem("token", response?.data?.token);
          toast.success(response?.data?.msg);
          navigate("/");
        } else {
          toast.error(response?.data?.msg);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("please fill all fields");
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
        <button onClick={HandleLogin}>Login</button>
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
export default Login;
