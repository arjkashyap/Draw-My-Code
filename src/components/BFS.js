import React, { useState, useEffect } from "react";
import Queue from "../utils/Queue";
import "../styles/BFS.css";

/* 
  Markers:
  0 -> empty space
  1 -> start position/ visisted
  2 -> end position
  3 -> wall

*/

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

  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    handleMsg();
  }, [start, target]);

  const setCellColor = (pos) => {
    const cellValue = matrix[pos.r][pos.c];
    if (pos.r === target.r && pos.c === target.c && isFound)
      return "greenyellow";
    switch (cellValue) {
      case 1:
        return "rgba(0, 0, 255, 0.4)";
      case 2:
        return "lightgreen";
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
      setMsg(" Click on cells to place wall at that position ");
      return;
    }
  };

  // Matrix cell handle click
  const handleClick = (pos) => {
    console.log(pos.r, pos.c);
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

  const breadthFirstSearch = () => {
    // helper function to match position obj
    const matchPos = (p1, p2) => p1.r === p2.r && p1.c === p2.c;

    // Available movements
    const moves = 8;
    const R_move = [-1, -1, 0, 1, 1, 1, 0, -1];
    const C_move = [0, 1, 1, 1, 0, -1, -1, -1];

    // Returns true if the move is valid
    const checkMove = (pos) => {
      const r = pos.r;
      const c = pos.c;
      if (r >= 0 && r < R && c >= 0 && c < C)
        return matrix[r][c] === 0 || matrix[r][c] === 2;
      return false;
    };

    const q = new Queue();
    q.push(start);

    const bfsSearch = setInterval(() => {
      if (q.isEmpty() === true) {
        console.log(q.isEmpty());
        clearInterval(bfsSearch);
      }

      const curr = q.front();
      // console.log(curr.r, curr.c);
      q.pop();
      if (matchPos(curr, target)) {
        setIsFound(true);
        setMsg(`Element Found at position: (${curr.r}, ${curr.c})`);
        q.clear();
        clearInterval(bfsSearch);
        return;
      }
      if (!isFound) {
        for (let i = 0; i < moves; i++) {
          const move = { r: curr.r + R_move[i], c: curr.c + C_move[i] };
          if (checkMove(move)) {
            setMatrixValue(move, 1);
            q.push(move);
          }
        }
      }
    }, 50);
  };

  const startSearch = () => {
    console.log("search started");

    if (start.r === -1 && start.c === -1) {
      setMsg("Set the marker for start and end by clicking on the cell");
      return;
    }
    if (target.r === -1 && target.c === -1) {
      setMsg("Set the marker for target by clicking on cell");
      return;
    }
    breadthFirstSearch();
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
    <div className="bfs">
      <h3 className="heading"> Breadth First Search </h3>
      <h6 className="subheader" style={msgStyle()}>
        {msg}
      </h6>
      <div className="btn-group">
        {/* <label className="sub-heading"> {result} </label> */}
        <button id="search-btn" className="button" onClick={startSearch}>
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
