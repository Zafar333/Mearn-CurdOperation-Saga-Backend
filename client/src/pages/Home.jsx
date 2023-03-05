import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import {
  loadUserStart,
  deleteUserStart,
  DataResetUser,
} from "../redux/actions";
import "./css/home.css";

const Home = () => {
  const resp = useSelector((state) => state?.alldata?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserStart());
  }, []);
  useEffect(() => {
    if (resp?.status === 200) {
      toast.success(resp?.msg);
      dispatch(DataResetUser());
    }
  }, [resp]);
  const handleDelete = (id) => {
    dispatch(deleteUserStart(id));
  };
  return (
    <>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Car Name</th>
            <th>Company</th>
            <th>Model</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {resp?.data?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.carname}</td>
                <td>{item.company}</td>
                <td>{item.model}</td>
                <td>{item.color}</td>
                <td>
                  <Link className="btn-edit" to={`product/${item._id}`}>
                    EDIT
                  </Link>
                  <Link
                    className="btn-dle"
                    onClick={() => handleDelete(item._id)}
                  >
                    DELETE
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
