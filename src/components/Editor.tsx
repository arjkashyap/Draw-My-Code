// Module for code editing i;e drag and drop code blocks

import React from "react";
import Line from "./Line";
import "../css/Editor.css";

const Editor: React.FC = () => {
  // Code written by the user
  // Index represents line number
  return (
    <div className="Editor">
      <h2> Editor</h2>
      <hr />
      <p>
        Commodo enim officia occaecat tempor reprehenderit ad. Est sit
        consectetur officia est pariatur anim Lorem nisi magna id reprehenderit
        dolore reprehenderit eiusmod. Eu labore culpa proident veniam
        exercitation ad eu pariatur sint reprehenderit ad est ullamco excepteur.
        Nulla eu ullamco cillum laborum officia exercitation enim ipsum fugiat
        consequat fugiat nulla ut adipisicing. Laborum proident aliquip mollit
        labore.
      </p>
      <div className="line-container">
        <Line lineNumber={0} />
        <Line lineNumber={1} />
        <Line lineNumber={2} />
        <Line lineNumber={3} />
      </div>
    </div>
  );
};

export default Editor;
