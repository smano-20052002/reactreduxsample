import { combineReducers } from "redux";
import todos from "./addTodoReducer";
import todosReducer from "./addTodoReducer";

const rootReducer= combineReducers({
 todos:todosReducer
} as any);

export default rootReducer;