import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComp = () => {
  let auth = localStorage.getItem("token");
  return <>{auth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateComp;
