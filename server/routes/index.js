import express from "express";
// import { CheckToken } from "../middlewares/ValidateToken.js";
import authRouter from "./AuthRoutes.js";
import usersRouter from "./usersRouter.js";
import productRouter from "./ProductRouter.js";

const router = express.Router();

const route = () => {
  router.use("/auth", authRouter());
  router.use("/users", usersRouter());
  router.use("/product", productRouter());

  return router;
};

export default route;
