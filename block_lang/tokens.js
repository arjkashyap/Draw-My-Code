"use strict";
//////////////////////////////////
// TOKENS
//////////////////////////////////
exports.__esModule = true;
exports.TT_INT = "INT";
exports.TT_FLOAT = "FLOAT";
exports.TT_PLUS = "PLUS";
exports.TT_MINUS = "MINUS";
exports.TT_MUL = "MUL";
exports.TT_DIV = "DIV";
exports.TT_LPAREN = "LPAREN";
exports.TT_RPAREN = "RPAREN";
var Token = /** @class */ (function () {
    function Token(type, value) {
        var _this = this;
        this.displayToken = function () { return _this.type + ": " + _this.value + "}"; };
        this.type = type;
        this.value = value;
    }
    return Token;
}());
