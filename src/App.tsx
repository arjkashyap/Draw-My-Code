import React from "react";
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <hr className="seperator" />
      <GameArea />
    </div>
  );
};

export default App;
