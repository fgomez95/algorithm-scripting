"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env jest */
var sumAll_1 = __importDefault(require("./sumAll"));
describe('sum all function', function () {
    it('should be imported correctly', function () {
        expect(sumAll_1.default).toBeDefined();
    });
    it('should return the sum of all numbers between specified range', function () {
        expect(sumAll_1.default([1, 4])).toEqual(10);
        expect(sumAll_1.default([4, 1])).toEqual(10);
        expect(sumAll_1.default([5, 10])).toEqual(45);
        expect(sumAll_1.default([10, 5])).toEqual(45);
    });
});
