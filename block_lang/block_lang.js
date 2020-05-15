"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//////////////////////////////////
// CONSTANTS
//////////////////////////////////
var DIGITS = ".0123456780";
//////////////////////////////////
// TOKENS
//////////////////////////////////
var TT_INT = "INT";
var TT_FLOAT = "FLOAT";
var TT_PLUS = "PLUS";
var TT_MINUS = "MINUS";
var TT_MUL = "MUL";
var TT_DIV = "DIV";
var TT_LPAREN = "LPAREN";
var TT_RPAREN = "RPAREN";
var Tokens = /** @class */ (function () {
    function Tokens(type, value) {
        var _this = this;
        this.displayToken = function () { return _this.type + ": " + _this.value + "}"; };
        this.type = type;
        this.value = value;
    }
    return Tokens;
}());
//////////////////////////////////
// ERRORS
//////////////////////////////////
var Error = /** @class */ (function () {
    function Error(errorName, errorDetails) {
        var _this = this;
        this.displayError = function () { return _this.errorName + " \n " + _this.errorDetails; };
        this.errorName = errorName;
        this.errorDetails = errorDetails;
    }
    return Error;
}());
var IllegalChar = /** @class */ (function (_super) {
    __extends(IllegalChar, _super);
    function IllegalChar(details) {
        return _super.call(this, "Illegal Character", details) || this;
    }
    return IllegalChar;
}(Error));
//////////////////////////////////
// LEXER
//////////////////////////////////
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
                ? { type: TT_INT, value: parseInt(numStr) }
                : { type: TT_FLOAT, value: parseFloat(numStr) };
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
                    tokens.push({ type: TT_PLUS });
                    _this.advance();
                }
                else if (_this.currentChar === "-") {
                    tokens.push({ type: TT_MINUS });
                    _this.advance();
                }
                else if (_this.currentChar === "*") {
                    tokens.push({ type: TT_MUL });
                    _this.advance();
                }
                else if (_this.currentChar === "/") {
                    tokens.push({ type: TT_DIV });
                    _this.advance();
                }
                else {
                    var err = new IllegalChar("We detected a weird char at line " + _this.currentLine);
                    return { token: [], errors: err };
                }
            }
            return { token: tokens, errors: null };
        };
        this.text = text;
        this.pos = -1;
        this.currentChar = null;
        this.advance();
    }
    return Lexer;
}());
var run = function (text) {
    var lex = new Lexer(text);
    var result = lex.makeTokens();
    console.log(result.token);
};
run("12.4  * 3");
