// Module responsible for gameplay coding area gameplay
// Editor is the child of this module
import React from "react";
import Tools from "./Tools";
import Editor from "./Editor"

const GamePlay: React.FC<{ gameStart: boolean }> = ({ gameStart }) => {
  if (gameStart) {
    return (
      <div className="GamePlay">
        <Tools />
        <Editor />
      </div>
    );
  } else {
    return <div />;
  }
};

export default GamePlay;
