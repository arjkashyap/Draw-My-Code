import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "../styles/ConwaysGOL.css";
import { Simulate } from "react-dom/test-utils";

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
  const R = Math.floor((winDim.h * cellHeight) / 70);
  const C = Math.floor((winDim.w * cellWidth) / 90);

  const [matrix, setMatrix] = useState(matrixInit(R, C));

  const [msg, setMsg] = useState(
    "Choose your inital setup by clicking on the cells and making them alive"
  );

  const [showInfo, setShowInfo] = useState(false);

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

      {!showInfo ? (
        <div className="btn-group">
          {/* <label className="sub-heading"> {result} </label> */}
          <button
            id="srch-btn"
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

          <button
            id="info-btn"
            className="button"
            onClick={() => setShowInfo(!showInfo)}
          >
            Learn
          </button>
        </div>
      ) : (
        <div className="btn-group">
          <button
            id="info-btn"
            className="button"
            onClick={() => setShowInfo(!showInfo)}
          >
            Visualize
          </button>
        </div>
      )}

      {showInfo ? (
        <div className="matrix">
          <div className="algo-container">
            <p> This is not an Algorithm but more like a simulation. </p>
            <p>
              The Game of Life, also known simply as Life, is a cellular
              automaton devised by the British mathematician John Horton Conway
              in 1970. It is a zero-player game, meaning that its evolution is
              determined by its initial state, requiring no further input. One
              interacts with the Game of Life by creating an initial
              configuration and observing how it evolves. It is Turing complete
              and can simulate a universal constructor or any other Turing
              machine.
            </p>
            <p>Rules: </p>
            <ol className="algo" style={{ listStyle: "disc" }}>
              <li>
                Any live cell with fewer than two live neighbours dies, as if by
                underpopulation.
              </li>
              <li>
                {" "}
                Any live cell with two or three live neighbours lives on to the
                next generation.
              </li>
              <li>
                Any live cell with more than three live neighbours dies, as if
                by overpopulation.
              </li>
              <li>
                Any dead cell with exactly three live neighbours becomes a live
                cell, as if by reproduction.
              </li>
            </ol>
            <a
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              target="__blank"
            >
              {" "}
              Learn More . .
            </a>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="marker-info">
            <ul className="info-list">
              <li className="info-items">
                <span
                  className="col"
                  style={{
                    padding: "0.4rem 1rem",
                  }}
                ></span>{" "}
                <p style={{ fontSize: "1rem" }}> Dead </p>
              </li>
              <li className="info-items">
                <span
                  className="col"
                  style={{
                    padding: "0.4rem 1rem",
                    backgroundColor: "red",
                  }}
                ></span>{" "}
                <p style={{ fontSize: "1rem" }}> Alive </p>{" "}
              </li>
            </ul>
          </div>

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
      )}
    </div>
  );
};

export default ConwaysGOL;
