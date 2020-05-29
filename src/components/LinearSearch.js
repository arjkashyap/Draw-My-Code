import React, { useState, useEffect } from "react";
import "../styles/LinearSearch.css";

const LinearSearch = () => {
  // Array box colors
  const boxFound = "green";
  const boxDefault = "white";
  const boxSelected = "yellow";
  // initialize default array
  const defaultArr = [12, 3, 14, 7, 21, 14, 1];
  const defaultSearch = 14;
  // current state of linear search
  const [searching, setSearching] = useState(false);
  const [Arr, setArr] = useState([]);
  const [searchElement, setSearchElement] = useState(defaultSearch);

  // Pointer for the index of aray
  const [ptr, setPtr] = useState(-1);
  // Stores index of elements found
  const [found, setFound] = useState([]);

  useEffect(() => {
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
  }, [ptr]);

  // Pull out number from array of divs
  const getNumber = (i) => parseInt(Arr[i].props.children.props.children);

  // Returns color for a particular array index
  const setColor = (index) => {
    if (found.includes(index)) return boxFound;
    if (ptr === index) return boxSelected;
    return boxDefault;
  };

  const startSearch = () => {
    if (searching) return;
    setSearching(true);
    let index = 0;
    setPtr(index);
    let search = setInterval(() => {
      index++;
      setPtr(index);

      if (index >= Arr.length) {
        setSearching(false);
        clearInterval(search);
      }
      if (index < Arr.length && getNumber(index) === searchElement) {
        setFound((found) => [...found, index]);
      }
    }, 800);
  };

  const getResult = () => {
    let res = ``;
    if (found.length === 0) {
      return "Element not found.. ";
    } else {
      found.forEach((e) => (res += ` ${e}`));
    }
    return "Element found at : " + res;
  };

  return (
    <div className="linear-search">
      <h3>Linear Search Visualize</h3>
      <br />
      <div className="array"> {Arr} </div>
      <br />
      <button className="start-btn" onClick={startSearch}>
        Search
      </button>
      <h4 className="result">{getResult()}</h4>
    </div>
  );
};

export default LinearSearch;
