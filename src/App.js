import React from "react";
import "./App.css";
import Header from "./components/Header";
import BFS from "./components/BFS";
import SearchAlgos from "./components/SearchAlgos";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      {/* <SearchAlgos /> */}
      <BFS />
    </div>
  );
}

export default App;
