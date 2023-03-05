import axios from "axios";
import { deleteRoute, productRoute } from "../utils/APis";
export const createUserApi = async (user) => {
  let token = localStorage.getItem("token");
  let response = await axios.post(`${productRoute}`, user, {
    headers: { Authorization: token },
  });
  return response;
};
export const loadUserapi = async () => {
  let token = localStorage.getItem("token");
  let response = await axios.get(`${productRoute}`, {
    headers: { Authorization: token },
  });
  return response;
};
export const updateUserApi = async (id, cardata) => {
  let token = localStorage.getItem("token");
  let response = await axios.post(`${productRoute}/${id}`, cardata, {
    headers: { Authorization: token },
  });
  return response;
};
export const deleteUserApi = async (id) => {
  let token = localStorage.getItem("token");
  let response = await axios.delete(`${deleteRoute}/${id}`, {
    headers: { Authorization: token },
  });
  return response;
};
