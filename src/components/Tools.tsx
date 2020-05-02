import React from "react";
import "../css/Tools.css";

const Tools: React.FC<{ onChange: any }> = ({ onChange }) => {
  // Button type pressed is passed to editor for displaying results
  const setBtn: number = 1;
  const loopBtn: number = 2;
  const condBtn: number = 3;
  const shapeBtn: number = 4;

  return (
    <div className="Tools">
      <button
        id="loop-btn"
        className="tool-btns"
        onClick={(btnType) => onChange(setBtn)}
      >
        {" "}
        Set{" "}
      </button>
      <button
        id="loop-btn"
        className="tool-btns"
        onClick={(btnType) => onChange(loopBtn)}
      >
        {" "}
        Loop{" "}
      </button>
      <button
        id="condition-btn"
        className="tool-btns"
        onClick={(btnType) => onChange(condBtn)}
      >
        Cond.
      </button>
      <button
        id="shape-btn"
        className="tool-btns"
        onClick={(btnType) => onChange(shapeBtn)}
      >
        {" "}
        Shape{"  "}
      </button>
    </div>
  );
};

export default Tools;
