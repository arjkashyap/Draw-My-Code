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

// Style Type check for setStyle function
interface Style {
  backgroundColor: string;
  padding: string;
}

const Line: React.FC<LineProps> = ({ lineNumber, codeLine, lineSelected }) => {
  // If true, the line displays a form for updating code
  const [updateForm, setUpdateForm] = useState<boolean>(false);

  const [lineRender, setLineRender] = useState<JSX.Element>(<div></div>);

  // Line of Code set for that line
  const renderCode: JSX.Element = (
    <div className="line-code" style={{ marginTop: "1rem" }}>
      {/* Renders the Object to block of code */}
      {BlockRender(codeLine)}
    </div>
  );

  // Form for updating line of code
  const updateCodeForm: JSX.Element = (
    <div className="line-code" style={{ marginTop: "1rem" }}>
      <form>
        <input type="text" value="update-code" />
      </form>
    </div>
  );

  useEffect(() => {
    const renderELemnt: JSX.Element = updateForm ? updateCodeForm : renderCode;
    console.log("Called update line method");
    setLineRender(renderELemnt);
  }, [updateForm]);

  const handleStyle = (lineNumber: number): Style => {
    const style: Style =
      lineNumber === lineSelected
        ? { backgroundColor: "#C7D6FC", padding: "6px" }
        : { backgroundColor: "#F1F3F8", padding: "2px" };
    return style;
  };

  // Handle Tool btn clicks and change line render state
  const handleToolBtns = (btn: number): void => {
    setUpdateForm(true);
    console.log(btn);
  };
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

      {lineRender}

      <div className="tools">
        <Tools onChange={(btnType: number): void => handleToolBtns(btnType)} />
      </div>
    </div>
  );
};

export default Line;
  