"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env jest */
var seekAndDestroy_1 = __importDefault(require("./seekAndDestroy"));
describe('seekAndDestroy', function () {
    it('should be imported correctly', function () {
        expect(seekAndDestroy_1.default).toBeDefined();
    });
    it('should remove given elements from array', function () {
        expect(seekAndDestroy_1.default([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
        expect(seekAndDestroy_1.default([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
        expect(seekAndDestroy_1.default([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
        expect(seekAndDestroy_1.default(["tree", "hamburger", 53], "tree", 53)).toEqual(["hamburger"]);
    });
});
