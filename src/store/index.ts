import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers"; // Import combined reducers

// const store = createStore(rootReducer);
const store = createStore(rootReducer as any, applyMiddleware(logger));

export default store;
