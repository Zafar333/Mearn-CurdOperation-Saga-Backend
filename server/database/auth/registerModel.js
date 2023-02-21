import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  image: String,
  username: String,
  email: String,
  password: String,
});

export const registerModel = mongoose.model("users", registerSchema);
