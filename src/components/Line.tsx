// Module Renders Lines for Editor

import React from "react";
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
    console.log(btn);
  };
  console.log("line rendered");
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
      <div className="line-code"> {BlockRender(codeLine)}</div>
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
