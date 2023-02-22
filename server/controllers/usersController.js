import { registerModel } from "../database/auth/registerModel.js";

export const user = async (req, resp) => {
  let id = req?.params.id;
  if (id) {
    try {
      let getUser = await registerModel
        .findOne({ _id: id })
        .select(["username", "image"]);
      if (!getUser) return;
      resp.status(200).json({ status: 200, data: getUser });
    } catch (error) {
      console.log("error in user", error.message);
    }
  } else {
    resp.json({ msg: "please send valid data" });
  }
};
