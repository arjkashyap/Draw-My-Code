import { LexerReturnType } from "./types";
import Lexer from "./lexer";

export {};

const run = (text: string) => {
  const lex = new Lexer(text);
  const result: LexerReturnType = lex.makeTokens();

  console.log(result.token);
};

run(`
  144.733 + 12.113 * 7
  + 6.1 / 4
`);
