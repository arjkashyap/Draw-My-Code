export {};

const strInput = ["set x = 0", "set y = 0"];
////////////////    TOKEN  ///////////
const numbers: string = "0123456789";

const TT_INT: string = "TT_INT";
const TT_PLUS: string = "TT_PLUS";
const TT_MIN: string = "TT_MIN";
const TT_MUL: string = "TT_MUL";
const TT_DIV: string = "TT_DIV";
const TT_IND: string = "TT_IND";

interface Token {
  type: string;
  value?: string | null;
}

const displayToken = (tk: Token): string =>
  tk.type ? `${tk.type}: ${tk.value}` : `${tk.value}`;

// Returns an integer token
const makeNumberToken = (num: string): Token => {
  return { type: TT_INT, value: "12" };
};

/////// LEXER ////////////
const lexer = (text: string): Array<Token> => {
  const tokens: Array<Token> = [];
  let pos: number = 0;
  let currChar: string = text[pos];

  while (currChar != null) {
    currChar = text[pos];
    if (currChar === " ") {
      pos++;
    } else if (numbers.includes(currChar)) {
      tokens.push(makeNumberToken(currChar));
    } else if (currChar === "+") {
      tokens.push({ type: TT_PLUS });
      pos++;
    } else if (currChar === "-") {
      tokens.push({ type: TT_MIN });
      pos++;
    } else if (currChar === "*") {
      tokens.push({ type: TT_MUL });
      pos++;
    } else if (currChar === "/") {
      tokens.push({ type: TT_DIV });
      pos++;
    }
  }

  return tokens;
};
