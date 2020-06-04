import React, { useState, useEffect, useContext } from "react";
import "../styles/LinearSearch.css";
import { ArrayContext } from "./SearchAlgos";
import "../styles/BinarySearch.css";

const BinarySearch = () => {
  // Global Array elements and search value
  const ArrData = useContext(ArrayContext);

  // Converts the array to int and sorts them
  const sortedArr = (array) =>
    array.map((e) => parseInt(e, 10)).sort((a, b) => a - b);

  // Sorted array is loaded here
  const [Array, setArray] = useState(sortedArr(ArrData.Array));
  const [search, setSearch] = useState(parseInt(ArrData.Search));

  // Stores the rendered array div for display
  const [component, setComponent] = useState(<div></div>);
  // Array box colors
  const colors = {
    boxFound: "greenyellow",
    boxDefault: "white",
    boxSelected: "yellow",
  };

  useEffect(() => {
    console.log("State array");
    console.log(Array);
    console.log("Array Reducer");
    console.log(ArrData.Array);

    const tmpArray = Array.map((e, index) => (
      <div
        className="arr-box"
        key={index}
        style={{ backgroundColor: colors.boxDefault }}
      >
        <p>{e}</p>
      </div>
    ));
    setComponent(tmpArray);
  }, [ArrData.Array]);

  const searchElement = parseInt(ArrData.Search);

  return (
    <div className="binary-search">
      <h3 id="heading">Binary Search</h3>
      <br />
      {/* <h5 className="sub-heading"> {result}</h5> */}
      <br />
      <div className="array">{component} </div>

      <br />
      <div className="btn-group">
        {/* <label className="sub-heading"> {result} </label> */}
        <button id="search-btn" className="button">
          Search : {searchElement}
        </button>
      </div>
    </div>
  );
};

export default BinarySearch;
