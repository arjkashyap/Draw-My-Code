import React, { useState, useEffect } from "react";
import "../styles/LinearSearch.css";

const LinearSearch = () => {
  // Array box colors
  const boxFound = "green";
  const boxDefault = "white";
  const boxSelected = "yellow";
  // initialize default array
  const defaultArr = [12, 3, 7, 14, 21, 8];
  const defaultSearch = 14;

  const [Arr, setArr] = useState([]);
  const [searchElement, setSearchElement] = useState(defaultSearch);
  // position of array index ptr
  const [ptr, setPtr] = useState(-1);
  // Search result
  const [found, setFound] = useState(false);

  useEffect(() => {
    const setColor = (index) => {
      // console.log("I cam from set color");
      // console.log(found);
      // console.log(ptr);

      if (found && index === ptr) {
        console.log("chala ni ? ");
        return boxFound;
      }
      if (index === ptr) return boxSelected;
      return boxDefault;
    };
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

  const setTrue = () => setFound(true);

  // Pull out number from array of divs
  const getNumber = (i) => parseInt(Arr[i].props.children.props.children);

  const startSearch = () => {
    let index = -1;
    let search = setInterval(() => {
      index++;
      setPtr(index);

      if (index >= Arr.length) {
        clearInterval(search);
      }
      if (index < Arr.length && getNumber(index) === searchElement) {
        setFound(true);
      }
    }, 800);
    console.log("ended");

    console.log(found);
  };

  const result = found ? `Element found at ${ptr}` : `Element not found`;

  return (
    <div className="linear-search">
      <h3>Linear Search Visualize</h3>
      <br />
      <div className="array"> {Arr} </div>
      <br />
      <button className="start-btn" onClick={startSearch}>
        Search
      </button>
      <h4 className="result">{result}</h4>
    </div>
  );
};

export default LinearSearch;
