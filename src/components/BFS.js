import React, { useState, useEffect } from "react";
import "../styles/BFS.css";

const BFS = () => {
  // Dimmensions of current window
  const winDim = { w: window.innerWidth, h: window.innerHeight };

  const cellWidth = 2;
  const cellHeight = 1.6;
  // Sets up number of Rows and Cols according to win size
  const R = Math.floor((winDim.h * cellHeight) / 100);
  const C = Math.floor((winDim.w * cellWidth) / 100) - 1;

  // Initialize matrix
  const matrixInit = (R, C) =>
    new Array(R).fill(0).map(() => new Array(C).fill(0));

  // Matrix
  const [matrix, setMatrix] = useState(matrixInit(R, C));
  const [msg, setMsg] = useState("");

  // Position of start index and target
  const [start, setStart] = useState({ r: -1, c: -1 });
  const [target, setTarget] = useState({ r: -1, c: -1 });

  // Matrix div component
  const [componenet, setComponenet] = useState(<div></div>);

  useEffect(() => {
    handleMsg();
  }, [start, target]);

  const setCellColor = (pos) => {
    const cellValue = matrix[pos.r][pos.c];

    switch (cellValue) {
      case 1:
        return "rgba(0, 0, 255, 0.4)";
      case 2:
        return "lightgreen";
      default:
        return;
    }
  };

  // function return a div
  // used for rendering matrix on dom
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
    console.log(pos.r, pos.c);
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

  const handleMsg = () => {
    if (start.r === -1 && start.c === -1) {
      setMsg("Click on the cell to make it starting point");
      return;
    }
    if (target.r === -1 && target.c === -1) {
      setMsg(" Now click on the cell to make it target");
      return;
    }
    if (start.r && start.c && target.r && target.c) {
      setMsg(" Click on the Search Button to begin the algorithm . . . ");
      return;
    }
  };

  // Matrix cell handle click
  const handleClick = (pos) => {
    console.log("He clicked me ");
    console.log(pos.r, pos.c);
    if (
      (start.r === -1 && start.c === -1) ||
      (pos.r === start.r && pos.c === start.c)
    ) {
      setStart({ ...start, r: pos.r, c: pos.c });
      setMatrixValue(pos, 1);
      return;
    }
    setTarget({ ...target, r: pos.r, c: pos.c });
    setMatrixValue(pos, 2);
  };
  console.log(start);
  return (
    <div className="bfs">
      <h3 className="heading"> Breadth First Search </h3>
      <h6 className="subheader">{msg}</h6>
      <div className="btn-group">
        {/* <label className="sub-heading"> {result} </label> */}
        <button id="search-btn" className="button">
          Start Search
        </button>

        <button id="reset-btn" className="button">
          Reset Markers
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

export default BFS;
