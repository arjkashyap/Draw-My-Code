import { Operations, EditorActionsTypes, ADD_LINE, REMOVE_LINE } from "./types";

const codeInit: Array<Operations> = [
  { blockType: 1, varName: "A", varValue: 0 },
  { blockType: 1, varName: "B", varValue: 0 },
];

export const editorReducer = (
  state: Array<Operations> = codeInit,
  action: EditorActionsTypes
) => {
  switch (action.type) {
    case ADD_LINE:
      return [...state, action.payload.lineData];
    case REMOVE_LINE:
      return state.filter(
        (line, lineNumber) => lineNumber !== action.payload.lineNumber
      );
    default:
      return state;
  }
};
