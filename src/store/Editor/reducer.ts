import { Operations, EditorActionsTypes, ADD_LINE, REMOVE_LINE } from "./types";

const codeInit: Array<Operations | null> = [
  { blockType: 1, varName: "X", varValue: 0 },
  { blockType: 1, varName: "Y", varValue: 0 },
  null,
  null,
];

export const editorReducer = (
  state: Array<Operations> = codeInit,
  action: EditorActionsTypes
) => {
  switch (action.type) {
    case ADD_LINE:
      return [...state, action.payload.lineData];
    case REMOVE_LINE:
      console.log("remove line called" + action.payload.lineNumber);
      return state.filter(
        (line, lineNumber) => lineNumber !== action.payload.lineNumber
      );
    default:
      return state;
  }
};
