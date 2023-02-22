import { registerModel } from "../database/auth/registerModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const Register = async (req, resp) => {
  let { image, username, password, email } = req.body;
  if (image && username && password && email) {
    try {
      let checkEmail = await registerModel.findOne({ email });
      if (checkEmail) return resp.json({ msg: "email already existed" });
      let hashPassword = await bcrypt.hash(password, 10);
      if (hashPassword) {
        let user = new registerModel({
          image,
          username,
          email,
          password: hashPassword,
        });
        let userSave = await user.save();
        return resp.status(201).json({
          status: 201,
          msg: "User Registered Successfully",
          data: userSave,
        });
      }
    } catch (error) {
      console.log("error in register route", error.message);
      return resp.json({ status: 500, msg: "Internal Server Error" });
    }
  } else {
    return resp.status(401).json({ msg: "Please send data" });
  }
};

export const Login = async (req, resp) => {
  let { email, password } = req.body;
  let key = process.env.SECRETKEY;
  if (email && password) {
    try {
      let userExist = await registerModel.findOne({ email });

      if (!userExist) return resp.json({ msg: "email or password is invalid" });
      let comparePass = await bcrypt.compare(password, userExist?.password);
      if (!comparePass)
        return resp.json({ msg: "email or password is invalid" });

      jwt.sign(
        { id: userExist._id },
        key,
        { expiresIn: "2h" },
        (err, token) => {
          if (err) return resp.json({ msg: "something went wrong" });
          return resp.status(200).json({
            status: 200,
            msg: "Login Successfully",
            data: userExist,
            token,
          });
        }
      );
    } catch (error) {
      console.log("error in login controller", error.message);
    }
  } else {
    resp.json({ msg: "Please send valid data" });
  }
};
