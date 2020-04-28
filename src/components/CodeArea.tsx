import React, { useState } from "react";
import "../css/CodeArea.css";
import Tutorial from "./Tutorial";
import Editor from "./Editor";

const CodeArea: React.FC = () => {
  const [showTutorial, setTutState] = useState(false); // Default value true
  const [gameStart, setGameStart] = useState(true); // Default value false

  function handleTry(): void {
    setTutState(false);
    setGameStart(true);
  }

  // Try Button appears only when Tutorial is being shown
  const tryBtn: JSX.Element | string = showTutorial ? (
    <button id="try-btn" onClick={handleTry}>
      {" "}
      Try It Out{" "}
    </button>
  ) : (
    ""
  );

  const editor: JSX.Element | null = gameStart ? <Editor /> : null;

  return (
    <div className="CodeArea">
      <h4 className="code-area-header"> CODE AREA </h4>
      <Tutorial showTutorial={showTutorial} />
      {/* Show the editor if the game has begun else shows try button */}
      {editor}
      {tryBtn}
    </div>
  );
};

export default CodeArea;
