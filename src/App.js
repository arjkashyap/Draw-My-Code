import React from "react";
import "./App.css";
import Header from "./components/Header";
import GameArea from "./components/GameArea";

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="seperator" />
      <hr className="seperator" />
      <GameArea />
    </div>
  );
}

export default App;
