import React, { useState } from "react";
import "../styles/ConwaysGOL.css";

const ConwaysGOL = () => {
  const winDim = { w: window.innerWidth, h: window.innerHeight };

  const cellWidth = 1;
  const cellHeight = 1;

  // Sets up number of Rows and Cols according to win size
  const R = Math.floor((winDim.h * cellHeight) / 27);
  const C = Math.floor((winDim.w * cellWidth) / 28);

  // Initialize matrix
  const matrixInit = (R, C) =>
    new Array(R).fill(0).map(() => new Array(C).fill(0));

  const [matrix, setMatrix] = useState(matrixInit(R, C));

  const renderMatrix = (matrix) =>
    matrix.map((row, r) => (
      <div className="row" style={{ display: "flex" }} key={`r${r}`}>
        {row.map((col, c) => (
          <div
            className="col"
            onClick={() => handleClick({ r: r, c: c })}
            style={{
              width: cellWidth + "rem",
              height: cellHeight + "rem",
              backgroundColor: setCellColor({ r, c }),
            }}
            key={`c${c}`}
          >
            {/* <p className="val"> {col}</p> */}
          </div>
        ))}
      </div>
    ));

  const handleClick = () => {};

  const setCellColor = () => {};

  return (
    <div className="conways-gol">
      <h3 className="heading">Conway's Game Of Life</h3>
      <h5 className="subheader"> Click on the cells to make it allive </h5>
      <br />
      <div className="matrix">
        <div
          className="mat-rows"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {renderMatrix(matrix)}
        </div>
      </div>
    </div>
  );
};

export default ConwaysGOL;
