import { ACTIONS } from "../actions";

const initialState = 0;

// สร้าง Reducers (ฟังก์ชันของ reducers จะรับ state และ action เป็น arguments)
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + action.score;
    case ACTIONS.DECREMENT:
      return state - action.score;
    default:
      return state;
  }
};
