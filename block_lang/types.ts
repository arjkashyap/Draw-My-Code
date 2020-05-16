import {Errors} from "./errors"

//////////////////////////////////
// Types
//////////////////////////////////

export interface Token {
  type: string;
  value?: number;
}

export interface LexerReturnType {
  token: Array<Token>;
  errors?: Errors | null;
}
