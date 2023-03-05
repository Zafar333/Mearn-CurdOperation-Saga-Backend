import {
  CREATE_USER_START,
  DELETE_USER_START,
  LOAD_USER_START,
  UPDATE_USER_START,
} from "./actiontypes";
import {
  createUserApi,
  deleteUserApi,
  loadUserapi,
  updateUserApi,
} from "./api";
import { put, call, takeEvery, fork, all } from "redux-saga/effects";
import {
  createUserError,
  craeteUserSuccess,
  loadUserSuccess,
  loadUserError,
  updateUserError,
  updateUserSuccess,
  deleteUserError,
  deleteUserSuccess,
} from "./actions";

function* onCreateUseStart() {
  yield takeEvery(CREATE_USER_START, onLoadcraeteStartAync);
}
function* onLoadUserStart() {
  yield takeEvery(LOAD_USER_START, loadUserStartAsync);
}
function* onupdateUserStarT() {
  yield takeEvery(UPDATE_USER_START, updateUserStartAsync);
}
function* updateUserStartAsync({ payload: { id, cardata } }) {
  const response = yield call(updateUserApi, id, cardata);
  try {
    if (response.data.status === 200) {
      yield put(updateUserSuccess(response.data));
    } else {
      yield put(updateUserError(response.data));
    }
  } catch (error) {
    yield put(updateUserError(response.data));
  }
}
function* loadUserStartAsync() {
  const response = yield call(loadUserapi);
  try {
    if (response.data.status === 200) {
      yield put(loadUserSuccess(response.data));
    } else {
      yield put(loadUserError(response.data));
    }
  } catch (error) {
    yield put(loadUserError(error.message));
  }
}
function* onLoadcraeteStartAync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);

    if (response.data.status === 200) {
      yield put(craeteUserSuccess(response.data));
    } else {
      console.log("send valid data");
    }
  } catch (error) {
    yield put(createUserError(error.message));
  }
}
function* onDeleteUserStart() {
  yield takeEvery(DELETE_USER_START, deleteUserStartAsync);
}
function* deleteUserStartAsync({ payload }) {
  try {
    const response = yield call(deleteUserApi, payload);
    if (response?.data?.status === 200) {
      yield put(deleteUserSuccess(response.data));
    }
  } catch (error) {
    yield put(deleteUserError(error.message));
  }
}
const userSaga = [
  fork(onCreateUseStart),
  fork(onLoadUserStart),
  fork(onupdateUserStarT),
  fork(onDeleteUserStart),
];
function* rootSaga() {
  yield all([...userSaga]);
}
export default rootSaga;
