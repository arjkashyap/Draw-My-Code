// Module responsible for gameplay coding area gameplay
import React from "react";
import Tools from "./Tools";

function GamePlay(props) {
  if (props.gameStart) {
    return (
      <div className="GamePlay">
        <Tools />
      </div>
    );
  } else {
    return (
        <div/>
    );
  }
}

export default GamePlay;
