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
// ERRORS
//////////////////////////////////
var Errors = /** @class */ (function () {
    function Errors(errorName, errorDetails) {
        var _this = this;
        this.displayError = function () { return _this.errorName + " \n " + _this.errorDetails; };
        this.errorName = errorName;
        this.errorDetails = errorDetails;
    }
    return Errors;
}());
exports.Errors = Errors;
var IllegalChar = /** @class */ (function (_super) {
    __extends(IllegalChar, _super);
    function IllegalChar(details) {
        return _super.call(this, "Illegal Character", details) || this;
    }
    return IllegalChar;
}(Errors));
exports.IllegalChar = IllegalChar;
