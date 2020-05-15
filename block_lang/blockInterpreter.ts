export {};

const strInput = `6.23 - 234
12 * 6 144 - 2
3 * 3
`;

/////////////////////////////
//     Errors
/////////////////////////////
const errors = (
  errorName: string,
  errorDes: string,
  errorPos?: number
): Errors => {
  return {
    errorName: "Illegal Character",
    errorDes: errorDes,
  };
};

/////////////////////////////
//     Token
/////////////////////////////
const numbers: string = "0123456789";

const TT_INT: string = "TT_INT";
const TT_FLOAT: string = "TT_FLOAT";
const TT_PLUS: string = "TT_PLUS";
const TT_MIN: string = "TT_MIN";
const TT_MUL: string = "TT_MUL";
const TT_DIV: string = "TT_DIV";
// const TT_IND: string = "TT_IND";

interface Token {
  type: string;
  value?: string | number;
}

interface MakeNumberReturnType {
  token: Token;
  newPos: number;
}

interface LexerReturnType {
  tokens: Array<Token>;
  errors?: Errors;
}

type Errors = { errorName: string; errorDes: string } | null;

const displayToken = (tk: Token): string =>
  tk.type ? `${tk.type}: ${tk.value}` : `${tk.value}`;

// Returns an integer token
const makeNumberToken = (str: string, pos: number): MakeNumberReturnType => {
  let numStr: string = "";
  let dotCount: number = 0;
  while (true) {
    let digitStr: string = str[pos];

    if (digitStr === ".") {
      if (dotCount === 1) break;

      dotCount = 1;
    }

    if (!numbers.includes(digitStr) && digitStr != ".") break;
    numStr = numStr.concat(digitStr);
    pos++;
  }

  const returnToken: MakeNumberReturnType =
    dotCount === 1
      ? { token: { type: TT_FLOAT, value: parseFloat(numStr) }, newPos: pos }
      : { token: { type: TT_INT, value: parseInt(numStr) }, newPos: pos };
  return returnToken;
};

/////////////////////////////
//     lexer
/////////////////////////////

const lexer = (text: string): LexerReturnType => {
  let currentLine: number = 1;
  const tokens: Array<Token> = [];
  let pos: number = 0;
  let currChar: string = text[pos];

  while (currChar != null && pos < text.length) {
    currChar = text[pos];
    if (currChar === " ") {
      pos++;
    } else if (currChar == "\n") {
      currentLine++;
      pos++;
    } else if (numbers.includes(currChar)) {
      const resultObject: MakeNumberReturnType = makeNumberToken(text, pos);
      const numToken = resultObject.token;
      tokens.push(numToken);
      pos = resultObject.newPos;
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
    } else {
      // Illegal char
      return {
        tokens: [],
        errors: errors(
          "Illegal char",
          `"${currChar}" is not a valid token Line number: ${currentLine}`
        ),
      };
    }
  }
  return { tokens: tokens, errors: null };
};

const run = (text: string): void => {
  const output: LexerReturnType = lexer(text);

  if (!output.errors) {
    console.log(output.tokens);
  } else {
    console.log(output.errors);
  }
};

run(strInput);
