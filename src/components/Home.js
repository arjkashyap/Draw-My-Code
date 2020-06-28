import React from "react";

import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h3 className="heading"> Visualizing Algorithms </h3>
        <p>
          {" "}
          Cupidatat tempor aute dolore occaecat excepteur ullamco aliquip
          incididunt. Deserunt laborum excepteur do ex excepteur. Commodo
          adipisicing laborum ullamco aliquip ea incididunt ad est culpa veniam
          incididunt. Consequat dolore nostrud laboris esse. Ex eiusmod ipsum
          nostrud aute esse culpa excepteur culpa. Duis sunt ad dolore duis
          occaecat consectetur. Cillum exercitation occaecat dolore occaecat
          velit amet irure officia Lorem aute minim id qui est.
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
            Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi. Minim
            magna mollit in velit ipsum ut nulla quis mollit est deserunt. Sint
            duis consectetur amet proident culpa in veniam est. Id eiusmod
            occaecat labore sint cupidatat aliqua duis reprehenderit nostrud ex.
            Anim consequat ea dolor qui sunt laboris eu esse non ullamco
            proident cillum anim et. Quis voluptate occaecat qui ipsum. Quis
            aliqua ea reprehenderit laborum consectetur mollit magna eiusmod do
            eiusmod esse. Reprehenderit officia deserunt do ea non commodo elit
            occaecat laborum commodo aliquip amet. Duis occaecat dolor eiusmod
            incididunt dolore et aliqua eu.
          </p>{" "}
        </div>
        <div className="bfs-inst">
          <Link to="/depth-first-search">
            {" "}
            <h3 className="heading"> Breadth First Search </h3>
          </Link>
          <p>
            Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi. Minim
            magna mollit in velit ipsum ut nulla quis mollit est deserunt. Sint
            duis consectetur amet proident culpa in veniam est. Id eiusmod
            occaecat labore sint cupidatat aliqua duis reprehenderit nostrud ex.
            Anim consequat ea dolor qui sunt laboris eu esse non ullamco
            proident cillum anim et. Quis voluptate occaecat qui ipsum. Quis
            aliqua ea reprehenderit laborum consectetur mollit magna eiusmod do
            eiusmod esse. Reprehenderit officia deserunt do ea non commodo elit
            occaecat laborum commodo aliquip amet. Duis occaecat dolor eiusmod
            incididunt dolore et aliqua eu.
          </p>
        </div>

        <div className="dfs-inst">
          <Link to="depth-first-search">
            {" "}
            <h3 className="heading">Depth First Search</h3>
          </Link>
          <p>
            Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi. Minim
            magna mollit in velit ipsum ut nulla quis mollit est deserunt. Sint
            duis consectetur amet proident culpa in veniam est. Id eiusmod
            occaecat labore sint cupidatat aliqua duis reprehenderit nostrud ex.
            Anim consequat ea dolor qui sunt laboris eu esse non ullamco
            proident cillum anim et. Quis voluptate occaecat qui ipsum. Quis
            aliqua ea reprehenderit laborum consectetur mollit magna eiusmod do
            eiusmod esse. Reprehenderit officia deserunt do ea non commodo elit
            occaecat laborum commodo aliquip amet. Duis occaecat dolor eiusmod
            incididunt
          </p>
        </div>
        <div className="cgol-inst">
          <Link to="conways-game-of-life">
            {" "}
            <h3 className="heading">Conway's Game of Life</h3>{" "}
          </Link>
          <p>
            Ipsum fugiat sunt laborum pariatur Lorem esse voluptate nisi. Minim
            magna mollit in velit ipsum ut nulla quis mollit est deserunt. Sint
            duis consectetur amet proident culpa in veniam est. Id eiusmod
            occaecat labore sint cupidatat aliqua duis reprehenderit nostrud ex.
            Anim consequat ea dolor qui sunt laboris eu esse non ullamco
            proident cillum anim et. Quis voluptate occaecat qui ipsum. Quis
            aliqua ea reprehenderit laborum consectetur mollit magna eiusmod do
            eiusmod esse. Reprehenderit officia deserunt do ea non commodo elit
            occaecat laborum commodo aliquip amet. Duis occaecat dolor eiusmod
            incididunt dolore et aliqua eu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
