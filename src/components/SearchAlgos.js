import React, { useReducer } from "react";
import LinearSearch from "./LinearSearch";
import UpdateArray from "./UpdateArray";

export const ArrayContext = React.createContext();

// Global default array and element to be searched
const Array = ["12", "3", "14", "7", "18", "14", "2"];
const search = "14";

const arrayReducer = (state, action) => {
  switch (action.type) {
    case "update":
      return action.payload.array;
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

const SearchAlgos = () => {
  const [arr, dispatch] = useReducer(arrayReducer, Array);
  return (
    <div>
      <div className="array-methods">
        <ArrayContext.Provider
          value={{ Array: Array, Search: search, ArrayDispatch: dispatch }}
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
