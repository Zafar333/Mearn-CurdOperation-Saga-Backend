import { reducer, reducerPostdata } from "./reducer";
import { combineReducers } from "redux";
const rootreducer = combineReducers({
  alldata: reducer,
  postdata: reducerPostdata,
});
export default rootreducer;
