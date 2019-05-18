"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function destroyer() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var result = arr[0].slice();
    var variables = arr.filter(function (el) { return !Array.isArray(el); });
    result = result.filter(function (el) { return !variables.includes(el); });
    return result;
}
exports.default = destroyer;
