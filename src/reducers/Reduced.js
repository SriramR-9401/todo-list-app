import { combineReducers } from "redux";
import Todo from "./Add";
import Complete from "./complete";

const Reduced = combineReducers({
	Todo,
	Complete,
});

export default Reduced;
