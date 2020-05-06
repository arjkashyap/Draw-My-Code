import * as actionTypes from "./types";
import { Operations, EditorActionsTypes } from "./types";

// Editor actions
export const lineAdded = (codeLine: Operations): EditorActionsTypes => ({
  type: actionTypes.ADD_LINE,
  payload: {
    lineData: codeLine,
  },
});

export const lineRemoved = (lineNumber: number): EditorActionsTypes => ({
  type: actionTypes.REMOVE_LINE,
  payload: {
    lineNumber: lineNumber,
  },
});
