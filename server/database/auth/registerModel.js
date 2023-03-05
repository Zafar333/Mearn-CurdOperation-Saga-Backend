import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  image: String,
  username: String,
  email: String,
  password: String,
});
const productSchema = new mongoose.Schema({
  carname: String,
  company: String,
  model: String,
  color: String,
});

export const registerModel = mongoose.model("users", registerSchema);
export const productModel = mongoose.model("products", productSchema);
