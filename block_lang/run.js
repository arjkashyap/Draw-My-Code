"use strict";
exports.__esModule = true;
var lexer_1 = require("./lexer");
var run = function (text) {
    var lex = new lexer_1["default"](text);
    var result = lex.makeTokens();
    console.log(result.token);
};
run("\n  144.733 + 12.113 * 7\n  + 6.1 / 4\n");
