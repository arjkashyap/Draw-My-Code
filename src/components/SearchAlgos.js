import React, { useReducer } from "react";
import LinearSearch from "./LinearSearch";
import UpdateArray from "./UpdateArray";
import { arrayReducer, searchReducer } from "../store/reducer";

export const ArrayContext = React.createContext();

// Global default array and element to be searched
export const ArrayInit = ["12", "3", "14", "7", "18", "14", "2"];
export const searchInit = "14";

const SearchAlgos = () => {
  const [arr, dispatch] = useReducer(arrayReducer, ArrayInit);
  const [search, searchDispatch] = useReducer(searchReducer, searchInit);

  return (
    <div>
      <div className="array-methods">
        <ArrayContext.Provider
          value={{
            Array: arr,
            Search: search,
            ArrayDispatch: dispatch,
            SearchDispatch: searchDispatch,
          }}
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
