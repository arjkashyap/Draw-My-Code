import React from "react";

import { Link } from "react-router-dom";
import Footer from "./Footer";

import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="about">
          <h3 className=""> About </h3>
          <p>
            {" "}
            For most of us, visualizing is a key part of learning. As I have
            understood so far in my learning experience, that it is very
            difficult to grasp a concept without having an understanding of how
            it looks like.{" "}
          </p>
          <ul>
            <li>
              {" "}
              Suppose for breadth first search, how does the pointer work its
              way to the desired location ?
            </li>
            <li>
              {" "}
              How does the binary search, dissect the array ? <br />
            </li>
            <li>
              {" "}
              How can Conway's Game of Life produce such elegant simulations ?{" "}
            </li>
          </ul>
          <p>
            This web application focuses on visualizing some computer
            algorithms. It shows how the programm works under the hood. I have
            tried to make the interface as simple as possible, It is{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              HIGHLY RECOMENDED
            </span>{" "}
            that you go through the instructions below on how to use it.
          </p>
        </div>
        <div className="wrapper">
          <div className="arr-ist">
            <Link to="/array-search">
              {" "}
              <h3 className="heading"> Array Search </h3>
            </Link>
            <p> So far, we have 2 kinds of array search algorithms.</p>
            <ul style={{ listStyle: "none" }}>
              <li>Binary search</li>
              <li>Linear Search</li>
            </ul>
            <p>
              You can <span className="heighlight ">SWITCH</span> between the
              two by selecting from the two radio buttons on top of the Array
              search Algos page. The interface lets you customize your array and
              the search variable. To add your custom array, head to the
              customize panel which should be located either on the right side
              or the bottom of the page. Click on the box which you want to edit
              in the customize pannel and add you integer. You can increase or
              decrease the size of the array however the maximum size can not
              exceed 10. After you have set your array, head back to the
              annimation area and click on search.
            </p>{" "}
          </div>
          <div className="bfs-inst">
            <Link to="/breadth-first-search">
              {" "}
              <h3 className="heading"> Breadth First Search </h3>
            </Link>
            <p>
              Head over to the Breadth first alogirhtm page. You will see a
              matrix representing a grid. <br /> In the matrix:
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>
                {" "}
                0 -> <span>Empty Cell</span>{" "}
              </li>
              <li>
                {" "}
                1 -> <span>Starting Cell / Visited cell</span>
              </li>
              <li>
                {" "}
                2 -> <span> Target cell </span>{" "}
              </li>
              <li>
                {" "}
                3 -> <span> Wall </span>{" "}
              </li>
            </ul>
            <p>
              First set the starting point by clicking on a cell. Than click on
              another cell which you want to set as a target. To make this more
              intresting, click on some cells to set them as obstacles/wall. At
              this point you can start the search by clicking on the start
              button on top of the matrix. You can reset the matrix by clicking
              on reset button
            </p>
          </div>

          <div className="dfs-inst">
            <Link to="depth-first-search">
              {" "}
              <h3 className="heading">Depth First Search</h3>
            </Link>
            <p>
              Head over to the Depth first alogirhtm page. You will see a matrix
              representing a grid. <br /> In the matrix:
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>
                {" "}
                0 -> <span>Empty Cell</span>{" "}
              </li>
              <li>
                {" "}
                1 -> <span>Starting Cell / Visited cell</span>
              </li>
              <li>
                {" "}
                2 -> <span> Target cell </span>{" "}
              </li>
              <li>
                {" "}
                3 -> <span> Wall </span>{" "}
              </li>
            </ul>
            <p>
              First set the starting point by clicking on a cell. Than click on
              another cell which you want to set as a target. To make this more
              intresting, click on some cells to set them as obstacles/wall. At
              this point you can start the search by clicking on start button on
              top of the matrix. You can reset the matrix by clicking on reset
              button
            </p>
          </div>
          <div className="cgol-inst">
            <Link to="conways-game-of-life">
              {" "}
              <h3 className="heading">Conway's Game of Life</h3>{" "}
            </Link>
            <p>
              This is not actually an alogirhtm. Its more like a simulation or a
              zero person game. It is{" "}
              <span className="heighlight">RECOMENDED</span> that you read about{" "}
              <a
                style={{ textDecoration: "none", color: "blue" }}
                href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              >
                Conway's game of Life
              </a>{" "}
              before actually trying the algorithm. <br />
              In the cell grid:
            </p>
            <ul style={{ listStyle: "none" }}>
              <li> Alive cell is represented by red cell </li>
              <li> Dead cell is represented by light blue cell </li>
            </ul>
            <p>
              Click on the cells which you want to set alive in your initial
              setup. You can set as many cells as you want. Now click on the
              start button to start the simulation. You can not edit the cells
              while the simulation is running. <br />
              Simulation can be stoped by clicking the stop button.
            </p>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
