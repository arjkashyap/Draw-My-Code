import React from "react";
import "../css/Tutorial.css";

function Tutorial(props) {
  console.log(props.showTutorial);
  if (props.showTutorial) {
    return (
      <div className="Tutorial">
        <h4> New To Draw My Code ??</h4>
        <br />
        <ul className="rules-list">
          <li> Non elit sint ea laboris est incididunt nisi ea deserunt. </li>
          <li>
            {" "}
            Anim do mollit do elit ullamco quis proident aliquip cillum laborum
            minim qui dolor laborum.{" "}
          </li>
          <li> Duis irure aliqua eu non veniam excepteur. </li>
          <li>
            {" "}
            Magna consequat velit sit velit irure dolor non laboris est sunt
            enim enim.{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Tutorial;
