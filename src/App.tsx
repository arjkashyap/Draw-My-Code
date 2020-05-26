import React from "react";
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import LinearSearch from "./components/LinearSearch";
import "./css/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <hr className="seperator" />
      <LinearSearch />
      {/* <GameArea /> */}
    </div>
  );
};

export default App;
