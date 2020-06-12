import React from "react";
import "./App.css";
import Header from "./components/Header";
// import BFS from "./components/BFS";
// import SearchAlgos from "./components/SearchAlgos";
import DFS from "./components/DFS";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      {/* <SearchAlgos /> */}
      {/* <BFS /> */}
      <DFS />
    </div>
  );
}

export default App;
