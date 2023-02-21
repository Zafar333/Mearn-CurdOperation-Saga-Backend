import express from "express";
import { Register } from "../controllers/authControllers.js";

const router = express.Router();

const auth = () => {
  router.post("/register", Register);
  return router;
};

export default auth;
