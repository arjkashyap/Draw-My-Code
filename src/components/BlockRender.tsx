// This function take the code block object and returns an html element
// The html element is diplayed in each line in text editor

import React from "react";
import { Operations } from "../store/Editor/types";

const BlockRender = (cb: Operations | null): JSX.Element => {
  const formatOuput = (value: number): string => {
    switch (value) {
      case 1:
        return `Set ${cb.varName} = ${cb.varValue}`;

      default:
        return "Nan";
    }
  };
  const output: string | null = cb !== null ? formatOuput(cb.blockType) : "Nan";

  // If the block type is not null
  return <div className="code-rn"> {output} </div>;
};

export default BlockRender;
