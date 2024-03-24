import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

// สร้าง rootReducer
// combineReducers() : เป็นการรวม Reducers หลายๆตัวให้เป็น Reducers เดียวกัน
const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
