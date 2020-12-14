import { INCREMENT, DECREMENT, ADD,MINUS } from "../actionTypes";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD:
      return { ...state, count: state.count + payload };
    case MINUS:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

export default counterReducer;