import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "../styles/ConwaysGOL.css";

// Initialize 0 value matrix
const matrixInit = (R, C) =>
  new Array(R).fill(0).map(() => new Array(C).fill(0));

const moves = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const ConwaysGOL = () => {
  const winDim = { w: window.innerWidth, h: window.innerHeight };

  // dim of each cell
  const cellWidth = 2;
  const cellHeight = 1.6;

  // Sets up number of Rows and Cols according to win size
  const R = Math.floor((winDim.h * cellHeight) / 50);
  const C = Math.floor((winDim.w * cellWidth) / 80);

  const [matrix, setMatrix] = useState(matrixInit(R, C));

  const [msg, setMsg] = useState(
    "Choose your inital setup by clicking on the cells and making them alive"
  );

  // Bool true if the simulation is ongoing
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const setCellColor = (pos) => {
    const cellStatus = matrix[pos.r][pos.c];
    switch (cellStatus) {
      case 1:
        return "red";

      default:
        return null;
    }
  };

  // Start simulation Recursive
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      setMsg("Simulation Stopped");
      return;
    }

    setMsg("Simmulation Running . . . ");
    setMatrix((m) => {
      return produce(m, (matCopy) => {
        for (let r = 0; r < R; r++) {
          for (let c = 0; c < C; c++) {
            let neighbors = 0;
            moves.forEach(([x, y]) => {
              const newR = r + x;
              const newC = c + y;
              if (newR >= 0 && newR < R && newC >= 0 && newC < C) {
                neighbors += m[newR][newC];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              matCopy[r][c] = 0;
            } else if (m[r][c] === 0 && neighbors === 3) {
              matCopy[r][c] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div className="conways-gol">
      <h3 className="heading">Conway's Game Of Life</h3>
      <h5 className="subheader"> {msg} </h5>
      <div className="btn-group">
        <button
          id="start-btn"
          className="button"
          style={{ backgroundColor: running ? "red" : "rgb(82, 111, 212)" }}
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "Stop " : "Start "}
        </button>
      </div>
      <br />
      <div className="matrix">
        <div
          className="mat-rows"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {matrix.map((row, r) => (
            <div className="row" style={{ display: "flex" }} key={`r${r}`}>
              {row.map((col, c) => (
                <div
                  className="col"
                  onClick={() => {
                    const newMatrix = produce(matrix, (matCopy) => {
                      matCopy[r][c] = matrix[r][c] ? 0 : 1;
                    });
                    setMatrix(newMatrix);
                  }}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConwaysGOL;
