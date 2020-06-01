import React, { useReducer, useEffect } from "react";
import LinearSearch from "./LinearSearch";
import UpdateArray from "./UpdateArray";

export const ArrayContext = React.createContext();

// Global default array and element to be searched
const ArrayInit = ["12", "3", "14", "7", "18", "14", "2"];
const search = "14";

const arrayReducer = (state = ArrayInit, action) => {
  switch (action.type) {
    case "add-box":
      return [...state, 0];
    case "update":
      const newArray = action.payload.array;
      console.log("I came from reducer state is");
      console.log(state);
      return newArray;

    default:
      return state;
  }
};

//Actions
export const arrayUpdated = (newArray) => ({
  type: "update",
  payload: {
    array: newArray,
  },
});

export const arrayPush = () => ({
  type: "add-box",
});

const SearchAlgos = () => {
  const [arr, dispatch] = useReducer(arrayReducer, ArrayInit);

  console.log("I came from search");
  console.log(arr);

  return (
    <div>
      <div className="array-methods">
        <ArrayContext.Provider
          value={{ Array: arr, Search: search, ArrayDispatch: dispatch }}
        >
          <LinearSearch />
          <br />
          <UpdateArray />
        </ArrayContext.Provider>
      </div>
    </div>
  );
};

export default SearchAlgos;
