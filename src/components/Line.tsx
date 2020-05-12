import React, { useState, useEffect } from "react";
import { Operations } from "../store/Editor/types";
import BlockRender from "./BlockRender";
import Tools from "./Tools";
import UpdateCodeForm from "./UpdateCodeForm";
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

// Type check for Tool btn pressed method
interface ToolBtnPressed {
  showForm: boolean;
  bntPressed: number;
}

const Line: React.FC<LineProps> = ({ lineNumber, codeLine, lineSelected }) => {
  // If true, the line displays a form for updating code
  const [updateForm, setUpdateForm] = useState<ToolBtnPressed>({
    showForm: false, // default value -> false
    bntPressed: -1,
  });

  const [lineRender, setLineRender] = useState<JSX.Element>(<div></div>);

  // Update code form
  const [codeValue, setCodeValue] = useState<string>(" ");

  // Code Update form handler
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCodeValue(e.target.value);
  };

  // Line of Code set for that line
  const renderCode: JSX.Element = (
    <div className="line-code" style={{ marginTop: "1rem" }}>
      {/* Renders the Object to block of code */}
      {BlockRender(codeLine)}
    </div>
  );
  // Mount inital line component
  useEffect(() => {
    const renderELemnt: JSX.Element = updateForm.showForm ? (
      <UpdateCodeForm
        btnNumber={updateForm.bntPressed}
        handleCodeChange={handleCodeChange}
        codeValue={codeValue}
      />
    ) : (
      renderCode
    );
    setLineRender(renderELemnt);
  }, [updateForm, codeValue]);

  // Handlye styles when the line is selected
  const handleStyle = (lineNumber: number): Style => {
    const style: Style =
      lineNumber === lineSelected
        ? { backgroundColor: "#C7D6FC", padding: "6px" }
        : { backgroundColor: "#F1F3F8", padding: "2px" };
    return style;
  };

  // Handle Tool btn clicks and change line render state
  const handleToolBtns = (btn: number): void => {
    setUpdateForm({ showForm: true, bntPressed: btn });
    console.log(btn);
  };

  const toolBtns: JSX.Element | null =
    lineNumber > 1 ? (
      <Tools onChange={(btnType: number): void => handleToolBtns(btnType)} />
    ) : null;

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

      {lineRender}

      <div className="tools">{toolBtns}</div>
    </div>
  );
};

export default Line;
