import React, { useState, useEffect } from "react";
import "../styles/DFS.css";
import Stack from "../utils/Stack";

const DFS = () => {
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

  const [isFound, setIsFound] = useState(false);
  const [ptr, setPtr] = useState({ r: -1, c: -1 });

  useEffect(() => {
    handleMsg();
  }, [start, target]);

  const setCellColor = (pos) => {
    const cellValue = matrix[pos.r][pos.c];
    if (pos.r === target.r && pos.c === target.c && isFound) return "darkgreen";
    if (pos.r === ptr.r && pos.c === ptr.c) return "darkblue";
    switch (cellValue) {
      case 1:
        return "rgba(0, 0, 255, 0.4)";
      case 2:
        return "greenyellow";
      case 3:
        return "red";
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
      setMsg("Click on a cell to make it starting point");
      return;
    }
    if (target.r === -1 && target.c === -1) {
      setMsg(" Now click on another cell to make it target");
      return;
    }
    if (start.r && start.c && target.r && target.c) {
      setMsg(" Click on cells to place wall at that position. ");
      return;
    }
  };

  // Matrix cell handle click
  const handleClick = (pos) => {
    if (
      (start.r === -1 && start.c === -1) ||
      (pos.r === start.r && pos.c === start.c)
    ) {
      setStart({ ...start, r: pos.r, c: pos.c });
      setMatrixValue(pos, 1);
      return;
    }
    if (
      start.r !== -1 &&
      start.c !== -1 &&
      target.r === -1 &&
      target.c === -1
    ) {
      setTarget({ ...target, r: pos.r, c: pos.c });
      setMatrixValue(pos, 2);
      return;
    }
    setMatrixValue(pos, 3);
  };

  const handleResetMarker = () => {
    const newArr = matrixInit(R, C);
    setMatrix(newArr);
    setStart({ ...start, r: -1, c: -1 });
    setTarget({ ...target, r: -1, c: -1 });
    setPtr({ ...ptr, r: -1, c: -1 });
    setIsFound(false);
  };

  const startSearch = () => {
    if (start.r === -1 && start.c === -1) {
      setMsg("Set the marker for start and end by clicking on the cell");
      return;
    }
    if (target.r === -1 && target.c === -1) {
      setMsg("Set the marker for target by clicking on cell");
      return;
    }
    depthFirstSearch();
  };

  ////////////////////// Main Algorithm ///////////////////////////////////////////////

  const depthFirstSearch = () => {
    // Matrix to map out the visited nodes
    let visited = new Array(R).fill(false).map(() => new Array(C).fill(false));
    const root = { r: start.r, c: start.c };

    // Available movements
    // const moves = 4;
    // const R_move = [-1, 0, 1, 0];
    // const C_move = [0, 1, 0, -1];

    const moves = 8;
    const R_move = [-1, -1, 0, 1, 1, 1, 0, -1];
    const C_move = [0, 1, 1, 1, 0, -1, -1, -1];

    // Returns true if the move is valid
    const checkMove = (pos) => {
      const r = pos.r;
      const c = pos.c;
      if (
        r >= 0 &&
        r < R &&
        c >= 0 &&
        c < C &&
        visited[pos.r][pos.c] === false &&
        isFound === false
      ) {
        return matrix[r][c] === 0 || matrix[r][c] === 2;
      }

      return false;
    };

    // Main traversal function
    const s = new Stack();
    s.push(root);
    visited[root.r][root.c] = true;

    const DFS = setInterval(() => {
      if (s.isEmpty() === true) {
        clearInterval(DFS);
      }

      const curr = s.pop();
      setPtr({ r: curr.r, c: curr.c });
      setMatrixValue(curr, 1);
      if (curr.r === target.r && curr.c === target.c) {
        setMsg(`Element found at (${curr.r}, ${curr.c})`);
        setIsFound(true);
        clearInterval(DFS);
        return;
      }
      // traversing adjacent elements
      for (let i = 0; i < moves; i++) {
        const move = { r: curr.r + R_move[i], c: curr.c + C_move[i] };
        if (checkMove(move)) {
          visited[move.r][move.c] = true;
          s.push(move);
        }
      }
    }, 50);
  };

  const msgStyle = () => {
    let style;
    if (isFound) {
      style = {
        color: "green",
        fontSize: "medium",
      };
    }
    return style;
  };

  return (
    <div className="dfs">
      <h3 className="heading"> Depth First Search </h3>
      <h6 className="subheader" style={msgStyle()}>
        {msg}
      </h6>
      <div className="btn-group">
        {/* <label className="sub-heading"> {result} </label> */}
        <button id="search-btn" className="button" onClick={startSearch}>
          Start
        </button>

        <button id="reset-btn" className="button" onClick={handleResetMarker}>
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

export default DFS;
