import { response } from "express";
import { productModel } from "../database/auth/registerModel.js";

export const productPost = async (req, res) => {
  try {
    const { carname, company, model, color } = req.body;
    if (carname && company && color && model) {
      const product = new productModel({ carname, company, model, color });
      if (product) {
        const savedproduct = await product.save();
        res.status(200).json({
          status: 200,
          msg: "data save sucessfull",
          data: savedproduct,
        });
      } else {
        res.status(500).json({ msg: "internal server error" });
      }
    } else {
      res.status(401).json({ msg: "please send data" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const productGet = async (req, res) => {
  try {
    const data = await productModel.find();
    res.status(200).json({ status: 200, data });
  } catch (error) {
    res.json({ msg: "internal server error", error: error.message });
  }
};
export const productUpdate = async (req, res) => {
  const id = req.params.id;
  const response = req.body;

  try {
    if (id && response) {
      const updataeData = await productModel.updateOne(
        { _id: id },
        { $set: response }
      );
      res.status(200).json({ status: 200, msg: "Data Updated Successfully" });
    }
  } catch (error) {
    res.json({ msg: error.stack, ref: "error" });
  }
};
export const productDelete = async (req, res) => {
  try {
    let deletedData = await productModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json({
      status: 200,
      msg: "Data Deleted Successfully",
      id: req.params.id,
    });
  } catch (error) {
    console.log("error in delete product", error.message);
  }
};
