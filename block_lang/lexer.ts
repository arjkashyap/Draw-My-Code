import { LexerReturnType, Token } from "./types";
import { TT_DIV, TT_FLOAT, TT_MINUS, TT_PLUS, TT_INT, TT_MUL } from "./tokens";
import { IllegalChar } from "./errors";
//////////////////////////////////
// LEXER
//////////////////////////////////
const DIGITS: string = ".0123456780";

class Lexer {
  private currentChar: string | null;
  private currentLine: number;
  private pos: number;

  public text: string;

  constructor(text: string) {
    this.text = text;
    this.pos = -1;
    this.currentLine = 1;
    this.currentChar = null;
    this.advance();
  }

  advance = (): void => {
    this.pos += 1;
    this.currentChar = this.pos < this.text.length ? this.text[this.pos] : null;
  };

  makeNumber = (): Token => {
    let numStr: string = "";
    let dotCount: number = 0;
    while (this.currentChar !== null && DIGITS.includes(this.currentChar)) {
      if (this.currentChar === ".") {
        if (dotCount === 1) break;
        dotCount++;
        numStr = numStr.concat(".");
      } else {
        numStr = numStr.concat(this.currentChar);
      }
      this.advance();
    }

    const returnToken: Token =
      dotCount === 0
        ? { type: TT_INT, value: parseInt(numStr) }
        : { type: TT_FLOAT, value: parseFloat(numStr) };

    return returnToken;
  };

  makeTokens = (): LexerReturnType => {
    const tokens: Array<Token> = [];
    while (this.currentChar != null && this.pos < this.text.length) {
      if (this.currentChar === " ") {
        this.advance();
      } else if (this.currentChar == "\n") {
        this.currentLine++;
        this.advance();
      } else if (DIGITS.includes(this.currentChar)) {
        tokens.push(this.makeNumber());
      } else if (this.currentChar === "+") {
        tokens.push({ type: TT_PLUS });
        this.advance();
      } else if (this.currentChar === "-") {
        tokens.push({ type: TT_MINUS });
        this.advance();
      } else if (this.currentChar === "*") {
        tokens.push({ type: TT_MUL });
        this.advance();
      } else if (this.currentChar === "/") {
        tokens.push({ type: TT_DIV });
        this.advance();
      } else {
        const err = new IllegalChar(
          `We detected a weird char at line ${this.currentLine}`
        );
        return { token: [], errors: err };
      }
    }
    return { token: tokens, errors: null };
  };
}

export default Lexer;
