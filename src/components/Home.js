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
            algorithms. It shows how the programm works under the hood. Even
            though I have tried to make the interface as simple as possible, It
            is{" "}
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
            <p>
              {" "}
              Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi.
              Minim magna mollit in velit ipsum ut nulla quis mollit est
              deserunt. Sint duis consectetur amet proident culpa in veniam est.
              Id eiusmod occaecat labore sint cupidatat aliqua duis
              reprehenderit nostrud ex. Anim consequat ea dolor qui sunt laboris
              eu esse non ullamco proident cillum anim et. Quis voluptate
              occaecat qui ipsum. Quis aliqua ea reprehenderit laborum
              consectetur mollit magna eiusmod do eiusmod esse. Reprehenderit
              officia deserunt do ea non commodo elit occaecat laborum commodo
              aliquip amet. Duis occaecat dolor eiusmod incididunt dolore et
              aliqua eu.
            </p>{" "}
          </div>
          <div className="bfs-inst">
            <Link to="/breadth-first-search">
              {" "}
              <h3 className="heading"> Breadth First Search </h3>
            </Link>
            <p>
              Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi.
              Minim magna mollit in velit ipsum ut nulla quis mollit est
              deserunt. Sint duis consectetur amet proident culpa in veniam est.
              Id eiusmod occaecat labore sint cupidatat aliqua duis
              reprehenderit nostrud ex. Anim consequat ea dolor qui sunt laboris
              eu esse non ullamco proident cillum anim et. Quis voluptate
              occaecat qui ipsum. Quis aliqua ea reprehenderit laborum
              consectetur mollit magna eiusmod do eiusmod esse. Reprehenderit
              officia deserunt do ea non commodo elit occaecat laborum commodo
              aliquip amet. Duis occaecat dolor eiusmod incididunt dolore et
              aliqua eu.
            </p>
          </div>

          <div className="dfs-inst">
            <Link to="depth-first-search">
              {" "}
              <h3 className="heading">Depth First Search</h3>
            </Link>
            <p>
              Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi.
              Minim magna mollit in velit ipsum ut nulla quis mollit est
              deserunt. Sint duis consectetur amet proident culpa in veniam est.
              Id eiusmod occaecat labore sint cupidatat aliqua duis
              reprehenderit nostrud ex. Anim consequat ea dolor qui sunt laboris
              eu esse non ullamco proident cillum anim et. Quis voluptate
              occaecat qui ipsum. Quis aliqua ea reprehenderit laborum
              consectetur mollit magna eiusmod do eiusmod esse. Reprehenderit
              officia deserunt do ea non commodo elit occaecat laborum commodo
              aliquip amet. Duis occaecat dolor eiusmod incididunt
            </p>
          </div>
          <div className="cgol-inst">
            <Link to="conways-game-of-life">
              {" "}
              <h3 className="heading">Conway's Game of Life</h3>{" "}
            </Link>
            <p>
              Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi.
              Minim magna mollit in velit ipsum ut nulla quis mollit est
              deserunt. Sint duis consectetur amet proident culpa in veniam est.
              Id eiusmod occaecat labore sint cupidatat aliqua duis
              reprehenderit nostrud ex. Anim consequat ea dolor qui sunt laboris
              eu esse non ullamco proident cillum anim et. Quis voluptate
              occaecat qui ipsum. Quis aliqua ea reprehenderit laborum
              consectetur mollit magna eiusmod do eiusmod esse. Reprehenderit
              officia deserunt do ea non commodo elit occaecat laborum commodo
              aliquip amet. Duis occaecat dolor eiusmod incididunt dolore et
              aliqua eu.
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
