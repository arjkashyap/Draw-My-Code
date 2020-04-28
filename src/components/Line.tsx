// Module Renders Lines for Editor

import React from "react";
import { CodeBlock } from "./CodeBlocks";
import "../css/Line.css";

interface LineProps {
  lineNumber: number;
  codeBlock: CodeBlock;
}

const Line: React.FC<LineProps> = ({ lineNumber, codeBlock }) => {
  console.log(codeBlock);
  return (
    <div className="Line" onClick={() => console.log("You clicked on a div")}>
      <div>
        <p> Line: {lineNumber} | </p>
      </div>
    </div>
  );
};

export default Line;
