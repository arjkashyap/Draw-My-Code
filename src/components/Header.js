import React from "react";
import "../styles/Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1 id="header-text">Draw My Code</h1>{" "}
      <h5 id="subheader-text"> Learn By Visualizing </h5>
    </div>
  );
};

export default Header;
