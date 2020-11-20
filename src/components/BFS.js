import React, { useState, useEffect } from 'react'
import Queue from '../utils/Queue'
import '../styles/BFS.css'
import Cell from './Cell'
import { Button, IconButton, Slider, Tooltip } from '@material-ui/core'
import {
    MenuBookOutlined,
    PlayArrowOutlined,
    RotateLeft,
    RotateLeftOutlined,
} from '@material-ui/icons'
import Footer from './Footer'

/* 
  Markers:
  0 -> empty space
  1 -> start position/ visisted
  2 -> end position
  3 -> wall

*/

const BFS = () => {
    // Dimmensions of current window
    const winDim = { w: window.innerWidth, h: window.innerHeight }
    let bfsSearch = null

    const cellWidth = 2
    const cellHeight = 1.6
    // Sets up number of Rows and Cols according to win size
    const R = Math.floor((winDim.h * cellHeight) / 70)
    const C = Math.floor((winDim.w * cellWidth) / 100)

    // Initialize matrix
    const matrixInit = (R, C) =>
        new Array(R).fill(0).map(() => new Array(C).fill(0))

    // Matrix
    const [matrix, setMatrix] = useState(matrixInit(R, C))
    const [msg, setMsg] = useState('')

    // Position of start index and target
    const [start, setStart] = useState({ r: -1, c: -1 })
    const [target, setTarget] = useState({ r: -1, c: -1 })

    const [isFound, setIsFound] = useState(false)
    const [ptr, setPtr] = useState({ r: -1, c: -1 })

    const [showInfo, setShowInfo] = useState(false)

    //
    // useEffect(() => {
    //     // handleMsg()
    // }, [handleMsg, start, target])

    const setCellColor = (pos) => {
        const cellValue = matrix[pos.r][pos.c]
        if (pos.r === target.r && pos.c === target.c && isFound)
            return 'darkgreen'
        if (pos.r === ptr.r && pos.c === ptr.c) return 'darkblue'
        switch (cellValue) {
            case 1:
                return 'rgba(0, 0, 255, 0.4)'
            case 2:
                return 'greenyellow'
            case 3:
                return 'red'
            default:
                return
        }
    }

    // function return a div
    // used for rendering matrix on dom
    const renderMatrix = (matrix) =>
        matrix.map((row, r) => (
            <div className="row" style={{ display: 'flex' }} key={`r${r}`}>
                {row.map((col, c) => (
                    <Cell
                        height={cellHeight + 'rem'}
                        width={cellWidth + 'rem'}
                        backgroundColor={setCellColor({ r, c })}
                        onClick={() => handleClick({ r, c })}
                        onHoverElevation={12}
                    >
                        {col}
                    </Cell>
                ))}
            </div>
        ))

    // Change the matrix index value
    const setMatrixValue = (pos, val) => {
        const newRow = matrix[pos.r]
        // new Row
        newRow[pos.c] = val

        setMatrix(
            matrix.map((row, r) => {
                if (r === pos.r) return newRow
                else return row
            })
        )
    }

    const handleMsg = () => {
        if (start.r === -1 && start.c === -1) {
            setMsg('Click on the cell to make it starting point')
            return
        }
        if (target.r === -1 && target.c === -1) {
            setMsg(' Now click on the cell to make it target')
            return
        }
        if (start.r && start.c && target.r && target.c) {
            setMsg(' Click on cells to place wall at that position ')
            return
        }
    }

    // Matrix cell handle click
    const handleClick = (pos) => {
        if (
            (start.r === -1 && start.c === -1) ||
            (pos.r === start.r && pos.c === start.c)
        ) {
            setStart({ ...start, r: pos.r, c: pos.c })
            setMatrixValue(pos, 1)
            return
        }
        if (
            start.r !== -1 &&
            start.c !== -1 &&
            target.r === -1 &&
            target.c === -1
        ) {
            setTarget({ ...target, r: pos.r, c: pos.c })
            setMatrixValue(pos, 2)
            return
        }
        setMatrixValue(pos, 3)
    }

    const handleResetMarker = () => {
        if (bfsSearch) clearInterval(bfsSearch)
        const newArr = matrixInit(R, C)
        setMatrix(newArr)
        setStart({ ...start, r: -1, c: -1 })
        setTarget({ ...target, r: -1, c: -1 })
        setPtr({ ...ptr, r: -1, c: -1 })
        setIsFound(false)
    }

    const breadthFirstSearch = () => {
        // helper function to match position obj
        const matchPos = (p1, p2) => p1.r === p2.r && p1.c === p2.c

        // Matrix to map out the visited nodes
        let visited = new Array(R)
            .fill(false)
            .map(() => new Array(C).fill(false))

        // Available movements
        const moves = 4
        const R_move = [-1, 0, 1, 0]
        const C_move = [0, 1, 0, -1]
        // const moves = 8;
        // const R_move = [-1, -1, 0, 1, 1, 1, 0, -1];
        // const C_move = [0, 1, 1, 1, 0, -1, -1, -1];

        // Returns true if the move is valid
        const checkMove = (pos) => {
            const r = pos.r
            const c = pos.c
            if (
                r >= 0 &&
                r < R &&
                c >= 0 &&
                c < C &&
                visited[pos.r][pos.c] === false
            ) {
                return matrix[r][c] === 0 || matrix[r][c] === 2
            }

            return false
        }

        const q = new Queue()
        q.push(start)

        bfsSearch = setInterval(() => {
            if (q.isEmpty() === true) clearInterval(bfsSearch)
            const curr = q.front()
            q.pop()
            setPtr({ ...ptr, r: curr.r, c: curr.c })
            setMatrixValue(curr, 1)

            if (matchPos(curr, target)) {
                setIsFound(true)
                setMsg(`Element Found at position: (${curr.r}, ${curr.c})`)
                q.clear()
                clearInterval(bfsSearch)
                return
            }
            if (!isFound) {
                for (let i = 0; i < moves; i++) {
                    const move = {
                        r: curr.r + R_move[i],
                        c: curr.c + C_move[i],
                    }
                    if (checkMove(move) === true) {
                        visited[move.r][move.c] = true

                        q.push(move)
                    }
                }
            }
        }, 10)
    }

    const startSearch = () => {
        if (start.r === -1 && start.c === -1) {
            setMsg('Set the marker for start and end by clicking on the cell')
            return
        }
        if (target.r === -1 && target.c === -1) {
            setMsg('Set the marker for target by clicking on cell')
            return
        }
        breadthFirstSearch()
    }

    const msgStyle = () => {
        let style
        if (isFound) {
            style = {
                color: 'green',
                fontSize: 'medium',
            }
        }
        return style
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bfs" style={{ flex: 1 }}>
                <h3 className="heading"> Breadth First Search </h3>
                <h6 className="subheader" style={msgStyle()}>
                    {msg}
                </h6>

                {!showInfo ? (
                    <div className="btn-group">
                        {/* <label className="sub-heading"> {result} </label> */}
                        <Tooltip title={'Start'}>
                            <IconButton>
                                <PlayArrowOutlined
                                    onClick={startSearch}
                                    style={{ marginRight: 4 }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Stop and Reset'}>
                            <IconButton>
                                <RotateLeftOutlined
                                    onClick={handleResetMarker}
                                    style={{ marginRight: 4 }}
                                    color={'secondary'}
                                />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title={'Learn about it'}>
                            <IconButton size={'medium'}>
                                <MenuBookOutlined
                                    onClick={() => setShowInfo(true)}
                                />
                            </IconButton>
                        </Tooltip>
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

                <div className="container">
                    <div className="marker-info">
                        <ul className="info-list">
                            <li className="info-items">
                                <span
                                    className="col"
                                    style={{
                                        padding: '0.4rem 0.6rem',
                                    }}
                                >
                                    0
                                </span>{' '}
                                <p> Empty </p>
                            </li>
                            <li className="info-items">
                                <span
                                    className="col"
                                    style={{
                                        padding: '0.4rem 0.6rem',
                                        backgroundColor: 'rgba(0, 0, 255, 0.4)',
                                    }}
                                >
                                    1
                                </span>{' '}
                                <p> Start/Visited </p>{' '}
                            </li>
                            <li className="info-items">
                                {' '}
                                <span
                                    className="col"
                                    style={{
                                        padding: '0.4rem 0.6rem',
                                        backgroundColor: 'greenyellow',
                                    }}
                                >
                                    2
                                </span>{' '}
                                <p> Destination </p>
                            </li>
                            <li className="info-items">
                                {' '}
                                <span
                                    className="col"
                                    style={{
                                        padding: '0.4rem 0.6rem',
                                        backgroundColor: 'red',
                                    }}
                                >
                                    3
                                </span>{' '}
                                <p> Wall </p>
                            </li>
                        </ul>
                    </div>

                    {showInfo ? (
                        <div className="matrix">
                            <div className="algo-container">
                                <p>
                                    Breadth-first search (BFS) is an algorithm
                                    for traversing or searching tree or graph
                                    data structures. It starts at the tree root
                                    (or some arbitrary node of a graph,
                                    sometimes referred to as a 'search key'),
                                    and explores all of the neighbor nodes at
                                    the present depth prior to moving on to the
                                    nodes at the next depth level.
                                </p>
                                <p>Algorithm: </p>
                                <ul className="algo">
                                    <li>
                                        {' '}
                                        Create An empty Queue Data Structure{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        Enqueue The starting point or the source
                                        node{' '}
                                    </li>
                                    <li> Loop while Queue is not Empty: </li>
                                    <ul>
                                        <li>
                                            {' '}
                                            Store the front element of Queue in
                                            a variable - current{' '}
                                        </li>
                                        <li>
                                            {' '}
                                            Pop the front element from queue{' '}
                                        </li>
                                        <li>
                                            {' '}
                                            Check if the current element is the
                                            target / search{' '}
                                        </li>
                                        <li>
                                            {' '}
                                            If the current element is target:
                                            return element
                                        </li>
                                        <li>
                                            {' '}
                                            Else enqueue the elements adjacent
                                            to the current element{' '}
                                        </li>
                                    </ul>
                                    <li>return</li>
                                </ul>
                                <a
                                    href="https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/BFS.tsx"
                                    target="__blank"
                                >
                                    {' '}
                                    Learn More . .
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="matrix">
                            <div
                                className="mat-rows"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {renderMatrix(matrix)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BFS
