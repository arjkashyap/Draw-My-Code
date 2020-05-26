import React, { useState, useEffect } from "react";
import "../css/LinearSearch.css";

const LinearSearch = () => {
  const array = [12, 3, 7, 14, 21, 8];
  const [Arr, setArr] = useState([]);
  const [Element, setElement] = useState(14);
  const [ptr, setPtr] = useState({ color: "white", index: -1 });

  useEffect(() => {
    console.log("any");
    const setColor = (index) => (index === ptr.index ? ptr.color : "white");
    const ArrBox = array.map((e, index) => (
      <div
        className="arr-box"
        key={index}
        style={{ backgroundColor: setColor(index) }}
      >
        <p>{e}</p>
      </div>
    ));
    setArr(ArrBox);
  }, [ptr]);

  const annimate = () => {
    const newPtr = { color: "green", index: 4 };
    setPtr(newPtr);
  };

  return (
    <div className="linear-search">
      <h3>Linear Search Visualize</h3>
      <br />
      <div className="array"> {Arr} </div>
      <br />
      <button className="start-btn" onClick={annimate}>
        Search
      </button>
    </div>
  );
};

export default LinearSearch;
