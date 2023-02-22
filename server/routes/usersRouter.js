import express from "express";
import { user } from "../controllers/usersController.js";
import { CheckToken } from "../middlewares/ValidateToken.js";

const router = express.Router();

const usersRouter = () => {
  router.get("/:id", CheckToken, user);

  return router;
};

export default usersRouter;
