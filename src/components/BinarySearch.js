import React, { useState, useEffect, useContext } from "react";
import "../styles/LinearSearch.css";
import { ArrayContext } from "./SearchAlgos";

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
  const [component, setComponent] = useState([]);

  // Pointer for the index of aray

  // Stores index of elements found
  const [found, setFound] = useState(-1);
  const [msg, setMsg] = useState("");

  // Window for rendering annimation color
  const [win, setWin] = useState({ l: -1, m: -1, r: -1 });

  useEffect(() => {
    if (searching) setMsg(`Searching for ${searchElement}`);
    else setMsg(`Search for ${searchElement}`);
    const newArray = ArrData.Array;
    const Array = newArray.map((e, index) => (
      <div
        className="arr-box"
        key={index}
        style={{ backgroundColor: colors.boxDefault }}
      >
        <p>{e}</p>
      </div>
    ));
    console.log(win);
    setComponent(Array);
  }, [ArrData.Array, searching, searchElement, win]);

  // Returns color for a particular array ind

  // Start binary search annimation
  const binSearch = () => {
    if (searching) return;

    setSearching(true);
    console.log("started");
    let arr = ArrData.Array;
    // format arr
    arr = arr.map((e) => parseInt(e, 10));
    const search = parseInt(ArrData.Search, 10);
    console.log(arr);
    console.log(search);
    let start = 0;
    let end = arr.length - 1;
    let mid;
    setWin({ ...win, l: start, r: end });
    let binSearch = setInterval(() => {
      if (start > end) {
        setFound(-1);
        setMsg(`Element not found in the array. . .`);
        clearInterval(binSearch);
      }
      // console.table(win);
      mid = parseInt((start + end) / 2, 10);
      setWin({ ...win, l: start, m: mid, r: end });
      console.log("start ", start);
      console.log("mid ", mid);
      console.log("end", end);
      if (search === arr[mid]) {
        console.log("fouuunndd");
        setFound(mid);
        setMsg(`Element found at index: ${mid}`);
        console.log(mid);
        clearInterval(binSearch);
        return;
      } else if (search > arr[mid]) {
        // setWin({ ...win, l: start });

        start = mid + 1;
      } else if (search < arr[mid]) {
        end = mid - 1;
        // setWin({ ...win, r: end });
      }
    }, 1000);

    setFound(-1);
  };

  return (
    <div className="linear-search">
      <h3 id="heading">Linear Search</h3>
      <br />
      <h5 className="sub-heading"> {msg}</h5>
      <br />
      <div className="array">{component} </div>
      <br />
      <div className="btn-group">
        {/* <label className="sub-heading"> {msg} </label> */}
        <button id="search-btn" className="button" onClick={binSearch}>
          Search : {searchElement}
        </button>
      </div>
    </div>
  );
};

export default BinarySearch;
