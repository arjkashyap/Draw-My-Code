// Module exports interfaces for codeblock

/* 
  Code block types: 
  1 -> Variable Declaration
  2 -> Loops
  3 -> Conditions
*/

// Code is stored in this format
export interface CodeBlock {
  blockType: number | null;
  blockData: SetValue | Loops | Condition | null;
}

// Variable declarations
interface SetValue {
  varName: string;
  varValue: string | number;
}

// Loops
interface Loops {
  init: SetValue;
  condition: any;
  increment: number | undefined;
}

// Conditions
interface Condition {
  operand1: number | string;
  operator: string;
  operand2: number | string;
}
