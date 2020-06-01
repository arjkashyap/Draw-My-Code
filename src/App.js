import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchAlgos from "./components/SearchAlgos";

// Array elements and Serch value
const ArrData = React.createContext();

function App() {
  const setUpdateArr = () => true;
  return (
    <div className="App">
      <Header />
      <hr />
      <SearchAlgos />
    </div>
  );
}

export default App;
