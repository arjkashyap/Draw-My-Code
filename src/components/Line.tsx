// Module Renders Lines for Editor

import React from "react";
import { SetValue, Loops, Condition } from "./CodeBlocks";
import BlockRender from "./BlockRender";
import Tools from "./Tools";
import "../css/Line.css";

interface LineProps {
  lineNumber: number;
  codeBlock: SetValue | Loops | Condition | null;
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

  // Function listens for mouse click on the tool button and renders codeblock
  const handleToolBtns = (btn: number): void => {
    console.log("Button type");
    console.log(btn);
  };

  console.log(codeBlock);
  console.log("Line selected prop says: " + lineSelected);
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
      <div className="line-code"> {BlockRender(codeBlock)}</div>
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
