// Module Renders Lines for Editor

import React, { useState } from "react";
import { CodeBlock } from "./CodeBlocks";
import "../css/Line.css";

interface LineProps {
  lineNumber: number;
  codeBlock: CodeBlock;
  lineSelected: number;
}

const Line: React.FC<LineProps> = ({ lineNumber, codeBlock, lineSelected }) => {
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

  console.log(codeBlock);
  console.log("Line selected prop says: " + lineSelected);
  return (
    <div
      className="Line"
      // style={{ backgroundColor: backgroundColor, padding: padding }}
      style={{
        backgroundColor: handleStyle(lineNumber).backgroundColor,
        padding: handleStyle(lineNumber).padding,
      }}
    >
      <div>
        <p> Line: | {lineNumber}</p>
      </div>
    </div>
  );
};

export default Line;
