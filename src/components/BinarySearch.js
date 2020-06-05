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
    setComponent(Array);
  }, [ArrData.Array, searching, searchElement]);

  // Pull out number from array of divs
  const getNumber = (i) => parseInt(component[i].props.children.props.children);

  // Returns color for a particular array ind

  // Start binary search annimation
  const binSearch = () => {
    console.log("started");
    let arr = ArrData.Array;
    // format arr
    arr = arr.map((e) => parseInt(e, 10));
    const search = parseInt(ArrData.Search, 10);
    console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    let mid;

    let binSearch = setInterval(() => {
      if (start > end) {
        setFound(-1);
        clearInterval(binSearch);
      }

      mid = parseInt((start + end) / 2, 10);
      console.log("start ", start);
      console.log("mid ", mid);
      console.log("end",  end);
      if (search === arr[mid]) {
        console.log("fouuunndd");
        setFound(mid);
        console.log(mid);
        return;
      } else if (search > arr[mid]) {
        start = mid + 1;
      } else if (search < arr[mid]) {
        end = mid - 1;
      }
    }, 1000);
    // while (start <= end) {
    //   mid = parseInt((start + end) / 2, 10);
    //   console.log(start);
    //   console.log(mid);
    //   console.log(end);
    //   if (search === arr[mid]) {
    //     console.log("fouuunndd");
    //     setFound(mid);
    //     console.log(mid);
    //     return;
    //   } else if (search > arr[mid]) {
    //     start = mid + 1;
    //   } else if (search < arr[mid]) {
    //     end = mid - 1;
    //   }
    // }
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
        <p>{found}</p>
      </div>
    </div>
  );
};

export default BinarySearch;
