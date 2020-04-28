// Module for code editing i;e drag and drop code blocks

import React from "react";
import Line from "./Line";
import "../css/Editor.css";

// Code is stored in this format
interface CodeBlock {
  blockType: number;
  blockData: SetValue | Loops | Condition | null;
}

// Variable declarations
interface SetValue {
  type: number;
  varName: string;
  varValue: string | number;
}

// Loops
interface Loops {
  type: number;
  init: SetValue;
  condition: any;
  increment: number | undefined;
}

// Conditions
interface Condition {
  type: number;
  operand1: number | string;
  operator: string;
  operand2: number | string;
}

const Editor: React.FC = () => {
  // Position of pen where the pattern will be drawn
  const penPosition: Array<number> = [0, 0];

  // Contains blocks of code input by the user
  const code: Array<CodeBlock> = [];

  return (
    <div className="Editor">
      <h2> Editor</h2>
      <hr />
      <p style={{ textAlign: "left" }}>
        We Highly Recomnd reading the <a href="#"> Tutorial</a> before starting,
        but for those impatient coders, I have written some instructions below:{" "}
        <br />
        Position of the pen is in the co-ordinates <b>Pen(x, y)</b>. The value
        of x and y has been declared in the first two lines of editor. Use your
        the options in tool box to draw the given pattern. Please note that the{" "}
        <b>Draw Shape</b>
        tool will place a shape at the position of <b>Pen(x,y)</b> depending
        upon the value of x and y at that instance. Good Luck !!
      </p>
      <br />
      <div className="line-container">
        <Line lineNumber={0} />
        <Line lineNumber={1} />
        <Line lineNumber={2} />
        <Line lineNumber={3} />
      </div>
    </div>
  );
};

export default Editor;
