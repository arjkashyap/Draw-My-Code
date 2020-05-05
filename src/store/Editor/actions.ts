import * as actionTypes from "./types";
import { CodeLine, EditorActionsTypes } from "./types";

// Editor actions
export const lineAdd = (codeLine: CodeLine): EditorActionsTypes => ({
  type: actionTypes.ADD_LINE,
  payload: {
    lineData: codeLine,
  },
});

export const lineRemoced = (lineNumber: number): EditorActionsTypes => ({
  type: actionTypes.REMOVE_LINE,
  payload: {
    lineNumber: lineNumber,
  },
});
