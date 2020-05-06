import { Operations, EditorActionsTypes, ADD_LINE, REMOVE_LINE } from "./types";

export const editorReducer = (
  state: Array<Operations> = [],
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
