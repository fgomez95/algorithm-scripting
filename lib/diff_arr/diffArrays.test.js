"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env jest */
/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the
two given arrays, but not both. In other words, return the symmetric difference
of the two arrays.

Note
You can return the array with its elements in any order.
*/
var diffArrays_1 = __importDefault(require("./diffArrays"));
describe('diffArray', function () {
    it('should be imported correctly', function () {
        expect(diffArrays_1.default).toBeDefined();
    });
    it('should return an array', function () {
        expect(Array.isArray(diffArrays_1.default([1, true, 'hello'], [1, false, 8]))).toEqual(true);
    });
    it('should return the symmetric difference of two arrays', function () {
        var arrA = ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'];
        var arrB = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];
        expect(diffArrays_1.default(arrA, arrB)).toEqual(['pink wool']);
        var arrC = [];
        var arrD = ['snuffleupagus', 'cookie monster', 'elmo', false];
        expect(diffArrays_1.default(arrC, arrD)).toEqual(['snuffleupagus', 'cookie monster', 'elmo', false]);
    });
});
