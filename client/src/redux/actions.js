import React from "react";
import {
  CREATE_USER_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  DATA_RESET,
  DATA_RESET_USER,
  DELETE_USER_ERROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "./actiontypes";

export const createuserstart = (user) => ({
  type: CREATE_USER_START,
  payload: user,
});
export const DataReset = () => ({
  type: DATA_RESET,
});
export const DataResetUser = () => ({
  type: DATA_RESET_USER,
});

export const craeteUserSuccess = (userr) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: userr,
  };
};
export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});
export const loadUserStart = () => ({
  type: LOAD_USER_START,
});
export const loadUserSuccess = (getdata) => ({
  type: LOAD_USER_SUCCESS,
  payload: getdata,
});
export const loadUserError = (error) => ({
  type: LOAD_USER_ERROR,
  payload: error,
});
export const updateUserStart = (data) => {
  return {
    type: UPDATE_USER_START,
    payload: data,
  };
};
export const updateUserSuccess = (data) => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});
export const updateUserError = (error) => ({
  type: UPDATE_USER_ERROR,
  payload: error,
});
export const deleteUserStart = (id) => ({
  type: DELETE_USER_START,
  payload: id,
});
export const deleteUserSuccess = (deleteData) => ({
  type: DELETE_USER_SUCCESS,
  payload: deleteData,
});
export const deleteUserError = (error) => ({
  type: DELETE_USER_ERROR,
  payload: error,
});
