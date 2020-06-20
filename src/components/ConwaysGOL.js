import React, { useState, useEffect } from "react";
import "../styles/ConwaysGOL.css";

const ConwaysGOL = () => {
  const winDim = { w: window.innerWidth, h: window.innerHeight };

  const cellWidth = 2;
  const cellHeight = 1.6;

  // Sets up number of Rows and Cols according to win size

  const R = Math.floor((winDim.h * cellHeight) / 90);
  const C = Math.floor((winDim.w * cellWidth) / 100);

  const [msg, setMsg] = useState(
    "Choose your inital setup by clicking on the cells and make them alive"
  );

  // Initialize matrix
  const matrixInit = (R, C) =>
    new Array(R).fill(0).map(() => new Array(C).fill(0));

  const [matrix, setMatrix] = useState(matrixInit(R, C));

  // Bool true if the simulation is ongoing
  const [simulation, setSimulation] = useState(true);

  const setCellColor = (pos) => {
    const cellStatus = matrix[pos.r][pos.c];
    switch (cellStatus) {
      case 1:
        return "red";

      default:
        return null;
    }
  };

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
            <p className="val"> {col}</p>
          </div>
        ))}
      </div>
    ));

  // Change the matrix index value
  const setMatrixValue = (pos, val) => {
    const newRow = matrix[pos.r];
    // new Row
    newRow[pos.c] = val;

    setMatrix(
      matrix.map((row, r) => {
        if (r === pos.r) return newRow;
        else return row;
      })
    );
  };

  const handleClick = (pos) => {
    const currVal = matrix[pos.r][pos.c];
    const newVal = currVal === 1 ? 0 : 1;
    setMatrixValue(pos, newVal);
  };

  // const comparePos = (p1, p2) => p1[0] === p2[0] && p1[0] === p2[0];

  const startGame = () => {
    console.log("game has started");

    const R_move = [-1, -1, 0, 1, 1, 1, 0, -1];
    const C_move = [0, 1, 1, 1, 0, -1, -1, -1];

    const moves = R_move.map((e, i) => [e, C_move[i]]);
    const checkRules = (pos) => {
      const r = pos.r;
      const c = pos.c;

      // Caclulate number of neighbours
      let nbrs = 0;

      for (let m = 0; m < moves.length; m++) {
        const move = moves[m];
        const mR = move[0] + r;
        const mC = move[1] + c;

        if (mR >= 0 && mR < R && mC >= 0 && mC < C) nbrs += matrix[mR][mC];
      }
      console.log(nbrs);

      // Checking Rules for given cell
      if (matrix[r][c] === 1 && nbrs < 2) setMatrixValue({ r, c }, 0);
      // dies -> underpopulation
      else if (matrix[r][c] === 1 && nbrs > 3) setMatrixValue({ r, c }, 0);
      // dies -> overpopulation
      else if (matrix[r][c] === 1 && (nbrs === 2 || nbrs === 3))
        setMatrixValue({ r, c }, 1);
      // survies
      else if (matrix[r][c] === 0 && nbrs === 3) setMatrixValue({ r, c }, 1); // comes to life
    };

    const simulating = setInterval(() => {
      if (simulation === false) clearInterval(simulating);
      const updateMoves = Map();
      updateMoves.set(1, "one");
      for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
          checkRules({ r: r, c: c });
        }
      }

      // Update matrix
    }, 900);
    // checkRules({ r: 1, c: 1 });
  };

  return (
    <div className="conways-gol">
      <h3 className="heading">Conway's Game Of Life</h3>
      <h5 className="subheader"> {msg} </h5>
      <h5 className="subheader">Val:{simulation}</h5>
      <div className="btn-group">
        <button className="button" onClick={startGame}>
          Start Game of Life
        </button>
        <button
          style={{ backgroundColor: "#E2583A" }}
          className="button"
          onClick={() => setSimulation(false)}
        >
          End Game of Life
        </button>
      </div>
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
