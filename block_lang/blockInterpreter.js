"use strict";
exports.__esModule = true;
var strInput = "6.23 - 234\n12 * 6 144 - 2\n3 * 3\n";
/////////////////////////////
//     Errors
/////////////////////////////
var errors = function (errorName, errorDes, errorPos) {
    return {
        errorName: "Illegal Character",
        errorDes: errorDes
    };
};
/////////////////////////////
//     Token
/////////////////////////////
var numbers = "0123456789";
var TT_INT = "TT_INT";
var TT_FLOAT = "TT_FLOAT";
var TT_PLUS = "TT_PLUS";
var TT_MIN = "TT_MIN";
var TT_MUL = "TT_MUL";
var TT_DIV = "TT_DIV";
var displayToken = function (tk) {
    return tk.type ? tk.type + ": " + tk.value : "" + tk.value;
};
// Returns an integer token
var makeNumberToken = function (str, pos) {
    var numStr = "";
    var dotCount = 0;
    while (true) {
        var digitStr = str[pos];
        if (digitStr === ".") {
            if (dotCount === 1)
                break;
            dotCount = 1;
        }
        if (!numbers.includes(digitStr) && digitStr != ".")
            break;
        numStr = numStr.concat(digitStr);
        pos++;
    }
    var returnToken = dotCount === 1
        ? { token: { type: TT_FLOAT, value: parseFloat(numStr) }, newPos: pos }
        : { token: { type: TT_INT, value: parseInt(numStr) }, newPos: pos };
    return returnToken;
};
/////////////////////////////
//     lexer
/////////////////////////////
var lexer = function (text) {
    var currentLine = 1;
    var tokens = [];
    var pos = 0;
    var currChar = text[pos];
    while (currChar != null && pos < text.length) {
        currChar = text[pos];
        if (currChar === " ") {
            pos++;
        }
        else if (currChar == "\n") {
            currentLine++;
            pos++;
        }
        else if (numbers.includes(currChar)) {
            var resultObject = makeNumberToken(text, pos);
            var numToken = resultObject.token;
            tokens.push(numToken);
            pos = resultObject.newPos;
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
        else {
            // Illegal char
            return {
                tokens: [],
                errors: errors("Illegal char", "\"" + currChar + "\" is not a valid token Line number: " + currentLine)
            };
        }
    }
    return { tokens: tokens, errors: null };
};
var run = function (text) {
    var output = lexer(text);
    if (!output.errors) {
        console.log(output.tokens);
    }
    else {
        console.log(output.errors);
    }
};
run(strInput);
