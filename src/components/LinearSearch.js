import React, { useState, useEffect, useContext } from "react";
import "../styles/LinearSearch.css";
import { ArrayContext } from "./SearchAlgos";

const LinearSearch = () => {
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

  const startSearch = () => {
    setFound([]);
    setResult(`Looking for ${searchElement}...`);
    if (searching) return;
    setSearching(true);
    let index = 0;
    setPtr(index);
    let search = setInterval(() => {
      index++;
      setPtr(index);

      if (index >= Arr.length) {
        setSearching(false);
        setResult(`Element: ${searchElement}`);
        
        clearInterval(search);
      }
      if (index < Arr.length && getNumber(index) === searchElement) {
        setFound((found) => [...found, index]);
      }
    }, 800);
  };

  return (
    <div className="linear-search">
      <h3 id="heading">Linear Search</h3>
      <br />
      <h5 className="sub-heading"> {result}</h5>
      <br />
      <div className="array">{Arr} </div>
      <br />
      <div className="btn-group">
        {/* <label className="sub-heading"> {result} </label> */}
        <button id="search-btn" className="button" onClick={startSearch}>
          Search : {searchElement}
        </button>
      </div>
    </div>
  );
};

export default LinearSearch;
