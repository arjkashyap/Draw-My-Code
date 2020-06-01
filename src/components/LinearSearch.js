import React, { useState, useEffect, useContext } from "react";
import "../styles/LinearSearch.css";
import { ArrayContext } from "./SearchAlgos";

const LinearSearch = () => {
  // Array box colors
  const colors = {
    boxFound: "greenyellow",
    boxDefault: "white",
    boxSelected: "yellow",
  };

  // Global Array elements and search value
  const ArrData = useContext(ArrayContext);
  // initialize default array
  const [defaultArr, setDefaultArr] = useState(ArrData.Array);
  // const defaultSearch = 14;

  // current state of linear
  const [searching, setSearching] = useState(false);

  // HTML divs of array divs
  const [Arr, setArr] = useState([]);

  // Element to be searched in array
  const [searchElement, setSearchElement] = useState(parseInt(ArrData.Search) );

  // Pointer for the index of aray
  const [ptr, setPtr] = useState(-1);
  // Stores index of elements found
  const [found, setFound] = useState([]);

  const [result, setResult] = useState("");

  useEffect(() => {
    if (searching) setResult(`Searching for ${searchElement}`);
    else setResult(`Search for ${searchElement}`);
    const Array = defaultArr.map((e, index) => (
      <div
        className="arr-box"
        key={index}
        style={{ backgroundColor: setColor(index) }}
      >
        <p>{e}</p>
      </div>
    ));
    setArr(Array);
  }, [ptr, defaultArr]);

  // Pull out number from array of divs
  const getNumber = (i) => parseInt(Arr[i].props.children.props.children);

  // Returns color for a particular array index
  const setColor = (index) => {
    if (found.includes(index)) return colors.boxFound;
    if (ptr === index) return colors.boxSelected;
    return colors.boxDefault;
  };

  const startSearch = () => {
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
      <h3 id="heading">Linear Search Visualize</h3>
      <br />
      <h5 className="sub-heading"> {result}</h5>

      <div className="array"> {Arr} </div>

      <div className="btn-group">
        <button id="search-btn" className="button" onClick={startSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default LinearSearch;
