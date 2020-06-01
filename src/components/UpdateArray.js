import React, { useState, useEffect } from "react";
import "../styles/UpdateArray.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const UpdateArray = () => {
  const [Array, setArray] = useState(["12", "3", "14", "7", "18"]);
  const [search, setSearch] = useState("14");

  // Form Componnet:-> Array of input tags
  const [form, setForm] = useState();

  const [validated, setValidated] = useState(true);

  useEffect(() => {
    const arrForm = renderForm(Array);
    setForm(arrForm);
  }, [Array]);

  // Handle form click
  const handleClick = (index) => {
    const newArr = Array;
    newArr[index] = "";
    setArray(newArr);
    // Update the form div
    setForm(renderForm(Array));
  };

  const handleFormChange = (e, index) => {
    const newArr = Array;
    Array[index] = e.target.value;
    setArray(newArr);
    // Update the form div
    setForm(renderForm(Array));
  };

  // Form validators
  const validator = validated ? (
    <small></small>
  ) : (
    <sm className="validator">Enter an Int</sm>
  );

  const renderForm = (Array) => {
    const inputArray = Array.map((element, index) => (
      <div>
        <input
          className="arr-input"
          key={"F" + index}
          value={element}
          onClick={() => handleClick(index)}
          onChange={(e) => handleFormChange(e, index)}
        />
        &nbsp;
        {validator}
      </div>
    ));
    return <form className="arr-form">{inputArray}</form>;
  };

  const addBox = () => {
    const arr = Array;
    arr.push("0");
    setArray(arr);
    setForm(renderForm(Array));
  };

  const removeBox = () => {
    const arr = Array;
    arr.pop();
    setArray(arr);
    setForm(renderForm(Array));
  };

  return (
    <div className="update-array">
      <h3 className="headings">Custom Search</h3>
      <div className="form-container">
        {form}
        <div className="btn-group">
          <button id="add-box" className="button" onClick={addBox}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button id="remove-box" className="button" onClick={removeBox}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
      <br />
      <form>
        <label className="headings"> Search </label>
        <br />
        <input
          id="search-form"
          className="arr-input"
          onClick={() => setSearch("")}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      <br /> <br />
      {/* <h3>Look For</h3> */}
    </div>
  );
};

export default UpdateArray;
