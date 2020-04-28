// Module for code editing i;e drag and drop code blocks

import React, { useState } from "react";
import Line from "./Line";
import { CodeBlock } from "./CodeBlocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../css/Editor.css";
/* 
  Code block types: 
  1 -> Variable Declaration
  2 -> Loops
  3 -> Conditions
*/

const Editor: React.FC = () => {
  // Error message for invalid moves

  // Contains blocks of code input by the user
  // Each Index represent the line number
  // Initialize code
  const codeInit: Array<CodeBlock> = [
    { blockType: 1, blockData: { varName: "X", varValue: 0 } },
    { blockType: 1, blockData: { varName: "Y", varValue: 0 } },
  ];

  // All code block stored in code state
  let [code, updateCode] = useState(codeInit);

  // Add a new blank line to the editor
  function addNewLine(): void {
    updateCode([...code, { blockType: null, blockData: null }]);
  }

  // Remove last line from code editor
  function removeLine(): void {
    if (code.length !== 2) {
      code = code.filter((codeBlock, index) => index !== code.length - 1);
      updateCode(code);
    }
  }

  // Render Each Code block on lines
  const lineRender: any = code.map((codeBlock, lineNumber) => (
    <Line lineNumber={lineNumber} codeBlock={codeBlock} key={lineNumber} />
  ));

  return (
    <div className="Editor">
      <h2> Editor</h2>
      <hr />
      <p style={{ textAlign: "left" }}>
        We Highly Recomnd reading the <a href="/"> Tutorial</a> before starting,
        but for those impatient coders, I have written some instructions below:{" "}
        <br />
        Position of the pen is in the co-ordinates <b>Pen(x, y)</b>. The value
        of x and y has been declared in the first two lines of editor. Use your
        the options in tool box to draw the given pattern. Please note that the{" "}
        <b>Draw Shape</b>. tool will place a shape at the position of{" "}
        <b>Pen(x,y)</b> depending upon the value of x and y at that instance.
        Good Luck !!
      </p>
      <br />
      <div className="line-container">{lineRender}</div>
      <button id="new-line-btn" className="editor-btns" onClick={addNewLine}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button id="remove-line-btn" className="editor-btns" onClick={removeLine}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
};

export default Editor;
