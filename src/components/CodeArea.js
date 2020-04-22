import React, { useState } from "react";
import "../css/CodeArea.css";
import Tutorial from "./Tutorial";

// Coding section for the puzzle

function CodeArea() {
  const [showTutorial, setTutState] = useState(true);

  return (
    <div className="CodeArea">
      <h4 className="code-area-header"> CODE AREA </h4>
      <Tutorial showTutorial={showTutorial} />
      <button id="try-btn"> Try It Out </button>
    </div>
  );
}

export default CodeArea;
