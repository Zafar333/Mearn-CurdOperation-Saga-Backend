import express from "express";
import authRouter from "./AuthRoutes.js";
import usersRouter from "./usersRouter.js";

const router = express.Router();

const route = () => {
  router.use("/auth", authRouter());
  router.use("/users", usersRouter());
  return router;
};

export default route;
