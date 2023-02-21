import { registerModel } from "../database/auth/registerModel.js";
import bcrypt from "bcrypt";
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
