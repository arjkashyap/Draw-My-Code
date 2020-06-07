import React, { useState } from "react";
import "../styles/BFS.css";

const BFS = () => {
  // Dimmensions of current window
  const [winDim, setWinDim] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  const [msg, setMsg] = useState("Click on the cell to make it starting point");

  const cellWidth = 2;
  const cellHeight = 1.6;

  // Sets up number of Rows and Cols according to win size
  const R = Math.floor((winDim.h * cellHeight) / 100);
  const C = Math.floor((winDim.w * cellWidth) / 100);

  const cols = new Array(C).fill(0);
  const rows = new Array(R).fill(0);

  return (
    <div className="bfs">
      <h3 className="heading"> Breadth First Search </h3>
      <h6 className="subheader">{msg}</h6>
      <div className="matrix">
        <div
          className="rows"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {rows.map((row, r) => (
            <div className="row" style={{ display: "flex" }} key={`r${r}`}>
              {" "}
              {cols.map((col, c) => (
                <div
                  className="col"
                  style={{
                    width: cellWidth + "rem",
                    height: cellHeight + "rem",
                  }}
                  key={`c${c}`}
                >
                  <p className="val"> {col}</p>
                </div>
              ))}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BFS;
