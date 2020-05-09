// Module for code editing i;e drag and drop code blocks

import React, { useState, useEffect } from "react";
import Line from "./Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../css/Editor.css";
import { lineAdded, lineRemoved } from "../store/Editor/actions";
import store from "../store/Editor/store";

/* 

  Code block types: 
  1 -> Variable Declaration
  2 -> Loops
  3 -> Conditions
*/

const Editor: React.FC = () => {
  const [code, updateCode] = useState([]);

  // State stores the line number currently selected
  const [lineSelected, updateLineSelected] = useState<number>(-1);

  // print state when state changes
  store.subscribe(() => {
    console.log(store.getState());
  });

  // Mount reedux store in state code
  useEffect(() => updateCode(store.getState()), []);

  // const [lineSelected, updateLineSelected] = useState<number>(-1);
  // Add a new blank line to the editor
  const addNewLine = (): void => {
    store.dispatch(lineAdded(null));
    updateCode(store.getState());
  };

  // Removes last line from the editor
  const removeLine = (): void => {
    const lastLineIndex: number = code.length - 1;
    if (lastLineIndex !== 1) {
      store.dispatch(lineRemoved(lastLineIndex));
      updateCode(store.getState());
    }
  };

  // Render Each Code block on lines
  const lineRender = code.map((codeLine, lineNumber) => (
    <div
      key={lineNumber}
      className="lineContainer"
      onClick={() => updateLineSelected(lineNumber)}
    >
      <Line
        lineNumber={lineNumber}
        codeLine={codeLine}
        key={lineNumber}
        lineSelected={lineSelected}
      />
    </div>
  ));

  return (
    <div className="Editor">
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
      {/* Editor Lines */}
      <div className="line-container">{lineRender} </div>

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
