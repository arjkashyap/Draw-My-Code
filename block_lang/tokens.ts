//////////////////////////////////
// TOKENS
//////////////////////////////////

export const TT_INT: string = "INT";
export const TT_FLOAT: string = "FLOAT";
export const TT_PLUS: string = "PLUS";
export const TT_MINUS: string = "MINUS";
export const TT_MUL: string = "MUL";
export const TT_DIV: string = "DIV";
export const TT_LPAREN = "LPAREN";
export const TT_RPAREN = "RPAREN";

class Token {
  private type: string;
  private value?: string;
  constructor(type: string, value?: string) {
    this.type = type;
    this.value = value;
  }

  displayToken = (): string => `${this.type}: ${this.value}}`;
}
