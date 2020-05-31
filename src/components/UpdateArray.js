import React, { useState } from "react";
import "../styles/UpdateArray.css";

const UpdateArray = () => {
  const [defaultArr, setDefaultArr] = useState([12, 3, 14, 7, 21, 14, 1]);

  const setForm = () => {
    const inputArray = defaultArr.map((e, index) => (
      <input key={index} value={e} />
    ));
    return <form className="arr-form">{inputArray}</form>;
  };
  return (
    <div className="update-array">
      <h3>Add a custom array</h3>
      <div>{setForm()}</div>
      {/* <h3>Look For</h3> */}
    </div>
  );
};

export default UpdateArray;
