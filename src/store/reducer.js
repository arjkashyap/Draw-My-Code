// Reducer method for editing array
import { ArrayInit, searchInit } from "../components/SearchAlgos";
import { arrayActions, UPDATE_SEARCH } from "./actionTypes";

export const arrayReducer = (state = ArrayInit, action) => {
  switch (action.type) {
    case arrayActions.ADD_BOX:
      return [...state, 0];

    case arrayActions.POP_BOX:
      return state.filter((e, index) => index !== action.payload.index);

    case arrayActions.UPDATE:
      console.log("index yeh aaya", action.payload.index);
      console.log(state);
      const index = action.payload.index;
      const newValue = action.payload.newValue;
      const newArr = state.map((e, i) => {
        if (i === index) {
          return newValue;
        }
        return e;
      });
      return newArr;

    default:
      return state;
  }
};

export const searchReducer = (state = searchInit, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      const newValue = action.payload.newValue;
      return newValue;

    default:
      return state;
  }
};
