import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import BFS from "./BFS";
import SearchAlgos from "./SearchAlgos";
import DFS from "./DFS";
import ConwaysGOL from "./ConwaysGOL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navigation">
        <Router>
          <nav className="nav-bar">
            <ul className="nav-items">
              <li className="nav-item">
                <NavLink to="/">
                  <FontAwesomeIcon icon={faHome} selected /> Home
                </NavLink>
              </li>
              <li id="home" className="nav-item">
                <NavLink to="/array-search">Array Search Algos.</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/breadth-first-search">
                  {" "}
                  Breadth First Search{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink to="/depth-first-serch">
                  Depth First Search
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <NavLink to="/conways-game-of-life">
                  {" "}
                  Conways Game of Life
                </NavLink>{" "}
              </li>
            </ul>
          </nav>
          <br />
          <Switch>
            <Route path="/array-search">
              {" "}
              <SearchAlgos />{" "}
            </Route>
            <Route path="/breadth-first-search">
              {" "}
              <BFS />{" "}
            </Route>
            <Route path="/depth-first-serch">
              {" "}
              <DFS />{" "}
            </Route>
            <Route path="/conways-game-of-life">
              {" "}
              <ConwaysGOL />{" "}
            </Route>
          </Switch>
        </Router>
      </nav>
    </div>
  );
};

export default NavBar;
