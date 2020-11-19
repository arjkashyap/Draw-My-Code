import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import BFS from "../components/BFS";
import SearchAlgos from "../components/SearchAlgos";
import DFS from "../components/DFS";
import ConwaysGOL from "../components/ConwaysGOL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";
import Home from "../components/Home";

const NavBar = () => {
  const winDim = { w: window.innerWidth, h: window.innerHeight };
  return (
    <div>
      <nav className="navigation">
        <Router>
          <nav className="nav-bar">
            <ul
              className="nav-items"
              style={{
                display: "flex",
                flexDirection: winDim.w < 400 ? "column" : "row",
              }}
            >
              <li className="nav-item">
                <NavLink exact to="/" activeClassName="navbar__link--active">
                  <FontAwesomeIcon icon={faHome} selected /> Home
                </NavLink>
              </li>
              <li
                id="home"
                className="nav-item"
                activeClassName="navbar__link--active"
              >
                <NavLink
                  to="/array-search"
                  activeClassName="navbar__link--active"
                >
                  Array Search Algos.
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/breadth-first-search"
                  activeClassName="navbar__link--active"
                >
                  {" "}
                  Breadth First Search{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink
                  to="/depth-first-search"
                  activeClassName="navbar__link--active"
                >
                  Depth First Search
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <NavLink
                  to="/conways-game-of-life"
                  activeClassName="navbar__link--active"
                >
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
            <Route path="/depth-first-search">
              {" "}
              <DFS />{" "}
            </Route>
            <Route path="/conways-game-of-life">
              {" "}
              <ConwaysGOL />{" "}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </nav>
    </div>
  );
};

export default NavBar;
