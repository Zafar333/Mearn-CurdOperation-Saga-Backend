import React, { useEffect } from "react";
import "./css/addEditproductForm.css";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import {
  createuserstart,
  DataReset,
  loadUserStart,
  updateUserStart,
} from "../redux/actions";

const AddEditProductForm = () => {
  const [editmode, seteditmode] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardata, setcar] = useState({
    carname: "",
    company: "",
    model: "",
    color: "",
  });
  let response = useSelector((state) => state?.postdata?.createUser);
  const getdata = useSelector((state) => state?.alldata?.user);
  useEffect(() => {
    dispatch(DataReset());
  }, []);
  useEffect(() => {
    if (id) {
      seteditmode(true);
      const editdata = getdata?.data?.find((item) => item?._id == id);
      setcar({ ...editdata });
    } else {
      setcar({ ...cardata });
      seteditmode(false);
    }
  }, [getdata]);
  useEffect(() => {
    if (response?.status === 200) {
      toast.success(response?.msg);
      dispatch(DataReset());
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      toast.error(response?.msg);
    }
  }, [response]);

  const { carname, company, model, color } = cardata;
  function oninputchange(e) {
    const { name, value } = e.target;
    setcar({ ...cardata, [name]: value });
  }
  const addsubmit = () => {
    if (editmode == true) {
      dispatch(updateUserStart({ id, cardata }));
    } else {
      if (carname && model && company && color) {
        dispatch(createuserstart(cardata));
      } else {
        toast.error("please fill all fields");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="productForm">
          <h1
            style={{
              color: "white",
              backgroundColor: "#4d0000",
              alignSelf: "stretch",
              textAlign: "center",
              padding: "10px",
            }}
          >
            PRODUCT DETAIL
          </h1>

          <input
            type="text"
            name="carname"
            value={carname || ""}
            placeholder="Enter Your Car Name"
            onChange={oninputchange}
          ></input>
          <input
            type="text"
            name="company"
            value={company || ""}
            placeholder="Enter Your Car Company"
            onChange={oninputchange}
          ></input>
          <input
            type="text"
            name="model"
            value={model || ""}
            placeholder="Enter Your Car Model"
            onChange={oninputchange}
          ></input>
          <input
            type="text"
            name="color"
            value={color || ""}
            placeholder="Enter Your Car Color"
            onChange={oninputchange}
          ></input>
          <button className="btn-add" onClick={addsubmit}>
            {editmode ? "Update" : "ADD"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEditProductForm;
