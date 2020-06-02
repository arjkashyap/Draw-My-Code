import { arrayActions, UPDATE_SEARCH } from "./actionTypes";

//Actions

// Update an index of array
export const arrayUpdate = (newValue, index) => ({
  type: arrayActions.UPDATE,
  payload: {
    newValue: newValue,
    index: index,
  },
});

// Push a new col in array
export const arrayPush = () => ({
  type: arrayActions.ADD_BOX,
});

// Remove last index
export const arrayPop = (index) => ({
  type: arrayActions.POP_BOX,
  payload: {
    index: index,
  },
});

// Change the Search element
export const searchUpdate = (newValue) => ({
  type: UPDATE_SEARCH,
  payload: {
    newValue: newValue,
  },
});
