"use strict";
exports.__esModule = true;
var tokens_1 = require("./tokens");
var errors_1 = require("./errors");
//////////////////////////////////
// LEXER
//////////////////////////////////
var DIGITS = ".0123456780";
var Lexer = /** @class */ (function () {
    function Lexer(text) {
        var _this = this;
        this.advance = function () {
            _this.pos += 1;
            _this.currentChar = _this.pos < _this.text.length ? _this.text[_this.pos] : null;
        };
        this.makeNumber = function () {
            var numStr = "";
            var dotCount = 0;
            while (_this.currentChar !== null && DIGITS.includes(_this.currentChar)) {
                if (_this.currentChar === ".") {
                    if (dotCount === 1)
                        break;
                    dotCount++;
                    numStr = numStr.concat(".");
                }
                else {
                    numStr = numStr.concat(_this.currentChar);
                }
                _this.advance();
            }
            var returnToken = dotCount === 0
                ? { type: tokens_1.TT_INT, value: parseInt(numStr) }
                : { type: tokens_1.TT_FLOAT, value: parseFloat(numStr) };
            return returnToken;
        };
        this.makeTokens = function () {
            var tokens = [];
            while (_this.currentChar != null && _this.pos < _this.text.length) {
                if (_this.currentChar === " ") {
                    _this.advance();
                }
                else if (_this.currentChar == "\n") {
                    _this.currentLine++;
                    _this.advance();
                }
                else if (DIGITS.includes(_this.currentChar)) {
                    tokens.push(_this.makeNumber());
                }
                else if (_this.currentChar === "+") {
                    tokens.push({ type: tokens_1.TT_PLUS });
                    _this.advance();
                }
                else if (_this.currentChar === "-") {
                    tokens.push({ type: tokens_1.TT_MINUS });
                    _this.advance();
                }
                else if (_this.currentChar === "*") {
                    tokens.push({ type: tokens_1.TT_MUL });
                    _this.advance();
                }
                else if (_this.currentChar === "/") {
                    tokens.push({ type: tokens_1.TT_DIV });
                    _this.advance();
                }
                else {
                    var err = new errors_1.IllegalChar("We detected a weird char at line " + _this.currentLine);
                    return { token: [], errors: err };
                }
            }
            return { token: tokens, errors: null };
        };
        this.text = text;
        this.pos = -1;
        this.currentLine = 1;
        this.currentChar = null;
        this.advance();
    }
    return Lexer;
}());
exports["default"] = Lexer;
