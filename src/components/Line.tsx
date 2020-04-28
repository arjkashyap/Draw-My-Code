// Module Renders Lines for Editor

import React from "react";
import "../css/Line.css";

interface LineProps {
  lineNumber: number;
  codeBlock?: React.FC;
}

const Line: React.FC<LineProps> = ({ lineNumber }) => {
  return (
    <div className="Line" onClick={() => console.log("You clicked on a div")}>
      <div>
        <p> Line: {lineNumber} | </p>
      </div>
    </div>
  );
};

export default Line;
