// This function take the code block object and returns an html element
// The html element is diplayed in each line in text editor

import React from "react";
import { Operations } from "../store/Editor/types";

const BlockRender = (cb: Operations | null): JSX.Element => {
  let code: string = "Nan";

  // If the block type is not null
  return <div className="code-rn"> {code} </div>;
};

export default BlockRender;
