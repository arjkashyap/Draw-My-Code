import { CodeLine, EditorActionsTypes, ADD_LINE, REMOVE_LINE } from "./types";

// Initial value of state
const codeInit: Array<CodeLine> = [
  { blockType: 1, varName: "X", varValue: 0 },
  { blockType: 1, varName: "Y", varValue: 0 },
];

export const editorReducer = (state = codeInit, action: EditorActionsTypes) => {
  switch (action.type) {
    case ADD_LINE:
      return [...state, action.payload.lineData];
    case REMOVE_LINE:
      return state.filter(
        (line, lineNumber) => lineNumber !== action.payload.lineNumber
      );
    default:
      break;
  }
};
