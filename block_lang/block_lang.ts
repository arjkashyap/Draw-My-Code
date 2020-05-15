export {};

//////////////////////////////////
// Types
//////////////////////////////////

interface Token {
  type: string;
  value?: number;
}

interface LexerReturnType {
  token: Array<Token>;
  errors?: Error | null;
}

//////////////////////////////////
// CONSTANTS
//////////////////////////////////

const DIGITS: string = ".0123456780";

//////////////////////////////////
// TOKENS
//////////////////////////////////

const TT_INT: string = "INT";
const TT_FLOAT: string = "FLOAT";
const TT_PLUS: string = "PLUS";
const TT_MINUS: string = "MINUS";
const TT_MUL: string = "MUL";
const TT_DIV: string = "DIV";
const TT_LPAREN = "LPAREN";
const TT_RPAREN = "RPAREN";

class Tokens {
  private type: string;
  private value?: string;
  constructor(type: string, value?: string) {
    this.type = type;
    this.value = value;
  }

  displayToken = (): string => `${this.type}: ${this.value}}`;
}

//////////////////////////////////
// ERRORS
//////////////////////////////////
class Error {
  errorName: string;
  errorDetails: string;

  constructor(errorName: string, errorDetails: string) {
    this.errorName = errorName;
    this.errorDetails = errorDetails;
  }

  displayError = () => `${this.errorName} \n ${this.errorDetails}`;
}

class IllegalChar extends Error {
  constructor(details: string) {
    super("Illegal Character", details);
  }
}

//////////////////////////////////
// LEXER
//////////////////////////////////

class Lexer {
  private currentChar: string | null;
  private currentLine: number;
  private pos: number;

  public text: string;

  constructor(text: string) {
    this.text = text;
    this.pos = -1;
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

const run = (text: string) => {
  const lex = new Lexer(text);
  const result: LexerReturnType = lex.makeTokens();

  console.log(result.token);
};

run("12.4  * 3");
