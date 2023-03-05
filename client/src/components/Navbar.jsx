import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userRoute } from "../utils/APis";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [profileimg, setProfileImg] = useState(null);

  async function GetUser() {
    let userId = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    try {
      let { data } = await axios.get(`${userRoute}/${userId}`, {
        headers: {
          Authorization: token,
        },
      });
      if (data.status === 200) {
        let { image, username } = data?.data;
        setUsername(username);
        setProfileImg(image);
      } else {
        if (data?.isTokenValid) {
          localStorage.clear();
          navigate("/login");
        }
        toast.error(data?.msg);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    GetUser();
  }, []);

  function Logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        boxShadow: "0 1px 6px 0 rgba(0,0,0,0.2)",
        justifyContent: "space-between",
        padding: "4px 6px",
      }}
    >
      <div className="left">
        <img
          src={profileimg ? profileimg : ""}
          alt="profile"
          className="userProfile"
        />
        <Link to="/">Home</Link>
        <Link to="/product">Add Product</Link>
      </div>
      <button
        className="right"
        onClick={Logout}
        style={{ background: "#3333ff", borderRadius: "4px", color: "white" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
