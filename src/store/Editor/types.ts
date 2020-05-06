// Type check module for redux componenets
import * as codeLineTypes from "../../components/CodeBlocks";

export const ADD_LINE: string = "ADD_LINE";
export const REMOVE_LINE: string = "REMOVE_LINE";

// Type check for a line from codeblock
// export type CodeLine =
//   | codeLineTypes.Condition
//   | codeLineTypes.Loops
//   | codeLineTypes.SetValue
//   | null;

export interface Operations {
  blockType: number;
  varName?: string;
  varValue?: number;
  init?: string;
  condition?: string;
  increment?: string;
  operand1?: number | string;
  operator?: string;
  operand2?: number | string;
}

export interface AllCode {
  allCode: Array<Operations>;
}

interface PayLoadType {
  lineNumber?: number;
  lineData?: Operations;
}

// Optional type for Editor actions
export interface AddNewLine {
  type: typeof ADD_LINE;
  payload: PayLoadType;
}

export interface RemoveLine {
  type: typeof REMOVE_LINE;
  payload: PayLoadType;
}

// Action type Checks
export type EditorActionsTypes = AddNewLine | RemoveLine;
