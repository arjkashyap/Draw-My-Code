import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchAlgos from "./components/SearchAlgos";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <SearchAlgos />
    </div>
  );
}

export default App;
