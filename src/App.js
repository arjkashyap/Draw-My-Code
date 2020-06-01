import React from "react";
import "./App.css";
import Header from "./components/Header";
import LinearSearch from "./components/LinearSearch";
import UpdateArray from "./components/UpdateArray";



function App() {
  const setUpdateArr = () => true;
  return (
    <div className="App">
      <Header />
      <hr />
      <div className="array-methods">
        <LinearSearch />
        <br />
        <UpdateArray />
      </div>
    </div>
  );
}

export default App;
