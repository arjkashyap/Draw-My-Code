"use strict";
exports.__esModule = true;
var strInput = ["set x = 0", "set y = 0"];
////////////////    TOKEN  ///////////
var numbers = "0123456789";
var TT_INT = "TT_INT";
var TT_PLUS = "TT_PLUS";
var TT_MIN = "TT_MIN";
var TT_MUL = "TT_MUL";
var TT_DIV = "TT_DIV";
var TT_IND = "TT_IND";
var displayToken = function (tk) {
    return tk.type ? tk.type + ": " + tk.value : "" + tk.value;
};
// Returns an integer token
var makeNumberToken = function (num) {
    return { type: TT_INT, value: "12" };
};
/////// LEXER ////////////
var lexer = function (text) {
    var tokens = [];
    var pos = 0;
    var currChar = text[pos];
    while (currChar != null) {
        currChar = text[pos];
        if (currChar === " ") {
            pos++;
        }
        else if (numbers.includes(currChar)) {
            tokens.push(makeNumberToken(currChar));
        }
        else if (currChar === "+") {
            tokens.push({ type: TT_PLUS });
            pos++;
        }
        else if (currChar === "-") {
            tokens.push({ type: TT_MIN });
            pos++;
        }
        else if (currChar === "*") {
            tokens.push({ type: TT_MUL });
            pos++;
        }
        else if (currChar === "/") {
            tokens.push({ type: TT_DIV });
            pos++;
        }
    }
    return tokens;
};
