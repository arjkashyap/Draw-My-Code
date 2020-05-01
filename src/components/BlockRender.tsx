// This function take the code block object and returns an html element
// The html element is diplayed in each line in text editor

import React from "react";
import { SetValue, Loops, Condition } from "./CodeBlocks";

const BlockRender = (cb: SetValue | Loops | Condition | null): JSX.Element => {
  let code: string = "yaya";

  // If the block type is not null
  if (cb) {
    if (cb.blockType == 1 && cb != null) {
      code = `Set ${cb.varName} = ${cb.varValue}`;
    }
  }
  //   if (cb.blockType) {
  //       code = cb.blockData.varName
  //   }
return <div className="code-rn"> {code} </div>;
};

export default BlockRender;
