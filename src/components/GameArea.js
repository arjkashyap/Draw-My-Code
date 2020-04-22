import React from "react";
import "../css/GameArea.css";
import CodeArea from "./CodeArea";
import ImageArea from "./ImageArea";

function GameArea() {
  return (
    <div className="GameArea">
      <CodeArea />
      <ImageArea /> 
    </div>
  );
}

export default GameArea;
