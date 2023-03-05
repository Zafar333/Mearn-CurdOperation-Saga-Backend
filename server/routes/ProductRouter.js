import express from "express";
import { CheckToken } from "../middlewares/ValidateToken.js";
import {
  productPost,
  productGet,
  productUpdate,
  productDelete,
} from "../controllers/productControllers.js";

const router = express.Router();
const productRouter = () => {
  router.post("/", CheckToken, productPost);
  router.delete("/delete/:id", CheckToken, productDelete);
  router.post("/:id", CheckToken, productUpdate);
  router.get("/", CheckToken, productGet);

  return router;
};
export default productRouter;
