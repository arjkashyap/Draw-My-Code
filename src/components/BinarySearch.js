import React, { useState, useEffect, useContext } from "react";
import "../styles/LinearSearch.css";
import { ArrayContext } from "./SearchAlgos";
import "../styles/BinarySearch.css";

const BinarySearch = () => {
  // Global Array elements and search value
  const ArrData = useContext(ArrayContext);

  // Array box colors
  const colors = {
    boxFound: "greenyellow",
    boxDefault: "white",
    boxSelected: "yellow",
  };

  const searchElement = parseInt(ArrData.Search);

  // current state of linear
  const [searching, setSearching] = useState(false);

  // HTML divs of array divs
  const [Arr, setArr] = useState([]);

  // Pointer for the index of aray
  const [ptr, setPtr] = useState(-1);
  // Stores index of elements found
  const [found, setFound] = useState([]);

  const [result, setResult] = useState("");

  useEffect(() => {
    if (searching) setResult(`Searching for ${searchElement}`);
    else setResult(`Search for ${searchElement}`);
    const newArray = ArrData.Array;
    const Array = newArray.map((e, index) => (
      <div
        className="arr-box"
        key={index}
        style={{ backgroundColor: setColor(index) }}
      >
        <p>{e}</p>
      </div>
    ));
    setArr(Array);
  }, [ptr, ArrData.Array, searching, searchElement]);

  // Pull out number from array of divs
  const getNumber = (i) => parseInt(Arr[i].props.children.props.children);

  // Returns color for a particular array index
  const setColor = (index) => {
    if (found.includes(index)) return colors.boxFound;
    if (ptr === index) return colors.boxSelected;
    return colors.boxDefault;
  };

  // Return colors for Binary search annimation
  const binSetColor = (window) => {
    const { start, mid, end } = window;
    console.log("bin sss");
    console.log(start, mid, end);
    // if (found.includes(index)) return colors.boxFound;
    // if (ptr === index) return colors.boxSelected;
    return colors.boxDefault;
  };

  //Binary search Annimation
  const binarySearch = (arr, search) => {
    // Sorting the array
    search = parseInt(search, 10);
    arr = arr.map((e) => parseInt(e, 10));
    arr.sort((a, b) => a - b);
    console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    let mid;

    // Index range of array
    while (start <= end) {
      mid = (start + end) / 2;
      start = parseInt(start);
      mid = parseInt(mid);
      end = parseInt(end);
      binSetColor({ start, mid, end });
      if (search === arr[mid]) {
        setFound((found) => [...found, mid]);
        console.log(found);
        break;
      } else if (search < arr[mid]) end = mid - 1;
      else start = mid + 1;
    }

    console.log(found);
  };

  return (
    <div className="binary-search">
      <h3 id="heading">Binary Search</h3>
      <br />
      <h5 className="sub-heading"> {result}</h5>
      <br />
      <div className="array">{Arr} </div>
      <br />
      <div className="btn-group">
        {/* <label className="sub-heading"> {result} </label> */}
        <button
          id="search-btn"
          className="button"
          onClick={() => binarySearch(ArrData.Array, ArrData.Search)}
        >
          Search : {searchElement}
        </button>
      </div>
    </div>
  );
};

export default BinarySearch;
