// Module Renders Lines for Editor

import React, { useState, useEffect } from "react";
import { Operations } from "../store/Editor/types";
import BlockRender from "./BlockRender";
import Tools from "./Tools";
import "../css/Line.css";

interface LineProps {
  lineNumber: number;
  codeLine: Operations | null; // Code line is a bluprint of the data types and language operations avialble
  lineSelected: number;
}

const Line: React.FC<LineProps> = ({ lineNumber, codeLine, lineSelected }) => {
  // If addCode is true, line shows a form for updating line code
  const [addCode, updateAddCode] = useState<boolean>(false);

  // Manage style for selected or unselected line
  interface Style {
    backgroundColor: string;
    padding: string;
  }

  const handleStyle = (lineNumber: number): Style => {
    const style: Style =
      lineNumber === lineSelected
        ? { backgroundColor: "#C7D6FC", padding: "6px" }
        : { backgroundColor: "#F1F3F8", padding: "2px" };
    return style;
  };

  // Function listens for mouse click on the tool button and renders codeblock

  const handleToolBtns = (btn: number): void => {
    updateAddCode(false);
    console.log(addCode);
    console.log(btn);
  };

  let lineDiv: JSX.Element =
    addCode === true ? (
      <div>
        {" "}
        <p>Here the form will come</p>{" "}
      </div>
    ) : (
      <div className="line-code" style={{ marginTop: "1rem" }}>
        {" "}
        {BlockRender(codeLine)}
      </div>
    );

  return (
    <div
      className="Line"
      style={{
        backgroundColor: handleStyle(lineNumber).backgroundColor,
        padding: handleStyle(lineNumber).padding,
      }}
    >
      <div className="line-number">
        <p>#{lineNumber}: </p>
      </div>

      {/* Show form or rendered code */}
      {lineDiv}

      <div className="tools">
        {" "}
        <Tools
          onChange={(btnType: number): void => handleToolBtns(btnType)}
        />{" "}
      </div>
    </div>
  );
};

export default Line;
