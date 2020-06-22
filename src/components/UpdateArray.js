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

const UpdateArray = ({ sorted }) => {
  // Global Array elements and search value
  const ArrData = useContext(ArrayContext);

  const Array = ArrData.Array;

  // Dispatch method
  const arrayDispatch = ArrData.ArrayDispatch;
  const searchDispatch = ArrData.SearchDispatch;

  // Form Componnet:-> Array of input tags
  const [form, setForm] = useState();

  // Validator codes:
  // 0 -> Invalid non integer
  // 1 -> Valid sorted Integer
  // 2 -> Invalid unsorted integer
  const [validated, setValidated] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

  const [msg, setMsg] = useState("");

  const [sortMsg, setSortMsg] = useState("");

  // Check if the sorted order is maintained
  const isSorted = () => {
    const a = ArrData.Array.map((e) => parseInt(e, 10));
    const n = ArrData.Array.length;
    for (let i = 1; i < n; i++) {
      if (a[i] < a[i - 1]) return false;
    }

    return true;
  };

  useEffect(() => {
    // Set sort validator for binary search
    if (sorted) {
      if (isSorted()) {
        setSortMsg(sortMsg.slice(0, 0));
      }
      if (!isSorted()) setSortMsg("Sorted Order Must be Maintained");
    }

    const arrForm = renderForm(ArrData.Array);
    setForm(arrForm);
  }, [Array, ArrData.Array]);

  // Handle form click
  const handleClick = (index) => {
    arrayDispatch(arrayUpdate("", index));
  };

  const handleFormChange = (e, index) => {
    const val = e.target.value;
    setValidator(val, index);
    arrayDispatch(arrayUpdate(e.target.value, index, validated[index]));
  };

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
    console.log(arr.length);
    if (arr.length === 10) {
      setMsg("");
    }
    if (arr.length === 0) {
      setMsg("Array Size is zero");
      return;
    }
    arrayDispatch(arrayPop(arr.length - 1));
  };

  const handleEmptyArr = () => {
    if (ArrData.Array.length === 0) return;
    console.log(ArrData.Array.length);
    arrayDispatch(arrayPop(ArrData.Array.length - 1));
    handleEmptyArr();
  };

  // Helper function to change validated state
  const setValidatorUtil = (index, newVal) => {
    setValidated(
      validated.map((v, i) => {
        if (i === index) return newVal;
        else return v;
      })
    );
  };

  // Form validators
  // Returns true if form input is valid
  const setValidator = (value, index) => {
    if (value.match(/^[0-9]+$/) != null) {
      if (parseInt(value, 10)) setValidatorUtil(index, 1);
      return;
    }
    setValidatorUtil(index, 0);
  };

  // Returns a validator div according to form index
  const validator = (index) => {
    switch (validated[index]) {
      case 0:
        return <small className="validator">Enter an Int</small>;
      case 1:
        return <small></small>;
      case 2:
        return <small className="validator"> Maintain Sorted order </small>;

      default:
        return <small>Invalid</small>;
    }
  };

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
        {validator(index)}
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
      <label className="search-header">Search</label>
      <br />
      <input
        id="search-form"
        className="arr-input"
        onClick={() => searchDispatch(searchUpdate(""))}
        // onChange={(e) => setSearch(e.target.value)}
        onChange={(e) => searchDispatch(searchUpdate(e.target.value))}
        value={ArrData.Search}
      />
      <br />
      <small className="validator">{sortMsg}</small>
      <small className="validator">{msg}</small>

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
        <div className="btn-group">
          <button id="reset-btn" className="button" onClick={handleEmptyArr}>
            Empty
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateArray;
