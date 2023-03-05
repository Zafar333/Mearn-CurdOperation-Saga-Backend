import {
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DATA_RESET,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  DATA_RESET_USER,
} from "./actiontypes";
const InitialState = {
  user: [],
};
const INITIALSTATE = {
  createUser: [],
};
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
    case LOAD_USER_ERROR:
    case DELETE_USER_ERROR:
      return { ...state, user: action.payload };
    case DELETE_USER_SUCCESS:
      console.log("shjkdshkj", action.payload);
      console.log("array", state.user);
      return {
        ...state,
        user: {
          ...state.user,
          status: action.payload.status,
          msg: action.payload.msg,
          data: state.user.data.filter(
            (item) => item._id !== action.payload.id
          ),
        },
      };
    case DATA_RESET_USER:
      return { ...state, user: { ...state.user, msg: null, status: null } };
    default:
      return { ...state };
  }
};
export const reducerPostdata = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return { ...state, createUser: action.payload };
    case UPDATE_USER_SUCCESS:
      return { ...state, createUser: action.payload };

    case DATA_RESET:
      return { ...state, createUser: null };

    case CREATE_USER_ERROR:
      return { ...state, createUser: action.payload };
    default:
      return { ...state };
  }
};
