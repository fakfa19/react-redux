// สร้าง Action Types
export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

// สร้าง Action Creators
export const increment = (score = 1) => ({
  type: ACTIONS.INCREMENT,
  score,
});

export const decrement = (score = -1) => ({
  type: ACTIONS.DECREMENT,
  score,
});

