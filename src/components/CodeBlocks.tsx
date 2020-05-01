// Module exports interfaces for codeblock

/* 
  Code block types: 
  1 -> Variable Declaration
  2 -> Loops
  3 -> Conditions
*/

// Code is stored in this format
export interface CodeBlock {
  blockType: number;
  blockData: SetValue | Loops | Condition | null;
}

// Variable declarations
export interface SetValue {
  blockType: 1;
  varName: string;
  varValue: string | number;
}

// Loops
export interface Loops {
  blockType: 2;
  init: SetValue;
  condition: any;
  increment: number | undefined;
}

// Conditions
export interface Condition {
  blockType: 3;
  operand1: number | string;
  operator: string;
  operand2: number | string;
}
