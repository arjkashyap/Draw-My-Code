import React from "react";
import "../css/Tools.css";

function Tools() {
  return (
    <div className="Tools">
      <button id="loop-btn" className="tool-btns">
        {" "}
        Loop{" "}
      </button>
      <button id="condition-btn" className="tool-btns">
        {" "}
        Condition{" "}
      </button>

      <select id="dropdown" className="tool-btns">
        <option value="circle"> Circle</option>
        <option value="triangle">Triangle</option>
        <option value="square">Square</option>
      </select>
    </div>
  );
}

export default Tools;
