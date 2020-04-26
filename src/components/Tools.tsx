import React, { useState } from "react";
import "../css/Tools.css";

const Tools: React.FC = () => {
  const [shapeSelected, updateShape] = useState("circle");

  // function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   updateShape(e.target.value);
  // }
  console.log(shapeSelected);
  return (
    <div className="Tools">
      <button id="loop-btn" className="tool-btns">
        {" "}
        Set Value{" "}
      </button>
      <button id="loop-btn" className="tool-btns">
        {" "}
        Loop{" "}
      </button>
      <button id="condition-btn" className="tool-btns">
        {" "}
        Condition{" "}
      </button>
      <button id="shape-btn" className="tool-btns"> Draw Shape </button>
      {/* <select
        id="dropdown"
        className="tool-btns"
        value={shapeSelected}
        onChange={() => handelChange(document.getElementById) }
      >
        <option value="circle"> Circle</option>
        <option value="triangle">Triangle</option>
        <option value="square">Square</option>
      </select> */}
    </div>
  );
};

export default Tools;
