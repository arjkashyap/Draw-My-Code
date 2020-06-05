import React, { useState, useEffect, useContext } from "react";
import "../styles/UpdateArray.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { ArrayContext, searchType } from "./SearchAlgos";
import {
  arrayPop,
  arrayPush,
  arrayUpdate,
  searchUpdate,
} from "../store/actions";

const UpdateArray = (type) => {
  // Global Array elements and search value
  const ArrData = useContext(ArrayContext);

  const Array = ArrData.Array;

  // Dispatch method
  const arrayDispatch = ArrData.ArrayDispatch;
  const searchDispatch = ArrData.SearchDispatch;

  // Form Componnet:-> Array of input tags
  const [form, setForm] = useState();

  const [validated, setValidated] = useState(true);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const arrForm = renderForm(ArrData.Array);
    setForm(arrForm);
  }, [Array, ArrData.Array]);

  // Handle form click
  const handleClick = (index) => {
    arrayDispatch(arrayUpdate("", index));
  };

  const handleFormChange = (e, index) =>
    arrayDispatch(arrayUpdate(e.target.value, index));

  // Add new index in the array
  const handleAddBox = () => {
    const arr = ArrData.Array;
    if (arr.length > 9) {
      setMsg("Array Size reached max");
      return;
    }
    if (arr.length === 0) {
      setMsg("");
    }
    arrayDispatch(arrayPush());
  };

  const handleRemoveBox = () => {
    const arr = ArrData.Array;
    if (arr.length === 10) {
      setMsg("");
    }
    if (arr.length === 0) {
      setMsg("Array Size is zero");
      return;
    }
    arrayDispatch(arrayPop(arr.length - 1));
  };

  // Form validators
  const validator = validated ? (
    <small></small>
  ) : (
    <small className="validator">Enter an Int</small>
  );

  // Returns the whole JSX form
  const renderForm = (Array) => {
    const inputArray = Array.map((element, index) => (
      <div>
        <input
          className="arr-input"
          key={index + 13}
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

  return (
    <div className="update-array">
      <h3 className="headings">Customize</h3>
      <small className="small-msg">
        Edit Array fields by clicking on boxes
      </small>
      <hr />
      <div className="form-container">
        {form}
        <div className="btn-group">
          <button id="add-box" className="button" onClick={handleAddBox}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button id="remove-box" className="button" onClick={handleRemoveBox}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
      <small className="validator">{msg}</small>
      <br />
      <br />
      <input
        id="search-form"
        className="arr-input"
        onClick={() => searchDispatch(searchUpdate(""))}
        // onChange={(e) => setSearch(e.target.value)}
        onChange={(e) => searchDispatch(searchUpdate(e.target.value))}
        value={ArrData.Search}
      />
      <div className="btn-group">
        <button id="save-btn" className="button">
          Update
        </button>
      </div>
      <br /> <br />
      {/* <h3>Look For</h3> */}
    </div>
  );
};

export default UpdateArray;
