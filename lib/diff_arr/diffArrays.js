"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function diffArray(arrX, arrY) {
    return arrX.filter(function (el) { return !arrY.includes(el); }).concat(arrY.filter(function (el) { return !arrX.includes(el); }));
}
exports.default = diffArray;
