import express from "express";
import { Login, Register } from "../controllers/authControllers.js";
import { CheckToken } from "../middlewares/ValidateToken.js";

const router = express.Router();

const auth = () => {
  router.post("/register", Register);
  router.post("/login", Login);

  return router;
};

export default auth;
