import express from "express";
import authRouter from "./AuthRoutes.js";

const router = express.Router();

const route = () => {
  router.use("/auth", authRouter());
  return router;
};

export default route;
