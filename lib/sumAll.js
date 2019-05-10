"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumAll(arr) {
    var arrCopy = [];
    var x = arr[0];
    var y = arr[1];
    x > y
        ? arrCopy.push(y, x)
        : arrCopy = arr.slice();
    var result = arrCopy[0];
    for (var i = arrCopy[0]; i < arrCopy[1]; i += 1)
        result += i + 1;
    return result;
}
exports.default = sumAll;
