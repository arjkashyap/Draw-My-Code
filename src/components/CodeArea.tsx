import React, { useState } from "react";
import "../css/CodeArea.css";
import Tutorial from "./Tutorial";
import GamePlay from "./GamePlay";

const CodeArea: React.FC = () => {
  const [showTutorial, setTutState] = useState(true); // Default value true
  const [gameStart, setGameStart] = useState(false); // Default value false

  function handleTry(): void {
    setTutState(false);
    setGameStart(true);
  }

  const codeAreaHeader: JSX.Element | null = showTutorial ? (
    <h4 className="code-area-header"> CODE AREA </h4>
  ) : null;

  // Try Button appears only when Tutorial is being shown
  const tryBtn: JSX.Element | string = showTutorial ? (
    <button id="try-btn" onClick={handleTry}>
      {" "}
      Try It Out{" "}
    </button>
  ) : (
    ""
  );

  return (
    <div className="CodeArea">
      {codeAreaHeader}
      <Tutorial showTutorial={showTutorial} />
      <GamePlay gameStart={gameStart} />
      {tryBtn}
    </div>
  );
};

export default CodeArea;
