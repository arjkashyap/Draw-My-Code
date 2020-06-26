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
  const infoDiv =
    window.innerWidth < 1000 ? null : (
      <div className="info">
        <h2 className="heading" style={{ textAlign: "center" }}>
          Info.
        </h2>
        <p>
          Linear search is a very simple search algorithm. In this type of
          search, a sequential search is made over all items one by one. Every
          item is checked and if a match is found then that particular item is
          returned, otherwise the search continues till the end of the data
          collection. <br />
        </p>
        <b>Steps:</b>
        <ol>
          <li>
            {" "}
            Start from the leftmost element of array and one by one compare x
            with each element of array.{" "}
          </li>
          <li> If x matches with an element, return the index.</li>
          <li> If x doesn’t match with any of elements, return -1.</li>
          <li>Else (x is smaller) recur for the left half.</li>
        </ol>
        <small style={{ textAlign: "right", textDecoration: "none" }}>
          <a
            href="https://www.geeksforgeeks.org/linear-search/"
            target="__blank"
          >
            Read more . .
          </a>
        </small>
      </div>
    );
  return (
    <div className="linear-search">
      <h2 className="heading">Linear Search</h2>

      <h5 className="sub-heading"> {result}</h5>

      <div className="array">{Arr} </div>

      <div className="btn-group">
        {/* <label className="sub-heading"> {result} </label> */}
        <button id="search-btn" className="button" onClick={startSearch}>
          Search
        </button>
      </div>
      <br />
      {infoDiv}
    </div>
  );
};

export default LinearSearch;
