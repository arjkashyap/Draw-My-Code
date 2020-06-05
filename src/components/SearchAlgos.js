import React, { useReducer } from "react";
import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";
import UpdateArray from "./UpdateArray";
import "../styles/SearchAlgos.css";
import { arrayReducer, searchReducer } from "../store/reducer";

export const ArrayContext = React.createContext();

// Global default array and element to be searched
// export const ArrayInit = ["12", "3", "14", "7", "18", "14", "2"];
export const ArrayInit = ["2", "3", "7", "14", "18", "19", "21"];
export const searchInit = "14";
export const searchType = {
  lin: "linear",
  bin: "binary",
};
const SearchAlgos = () => {
  const [arr, dispatch] = useReducer(arrayReducer, ArrayInit);
  const [search, searchDispatch] = useReducer(searchReducer, searchInit);

  return (
    <div className="search-algos">
      <div className="array-methods">
        <ArrayContext.Provider
          value={{
            Array: arr,
            Search: search,
            ArrayDispatch: dispatch,
            SearchDispatch: searchDispatch,
          }}
        >
          {/* <LinearSearch /> */}
          <br />
          <BinarySearch />
          <br />
          <UpdateArray type={searchType.bin} />
        </ArrayContext.Provider>
      </div>
    </div>
  );
};

export default SearchAlgos;
