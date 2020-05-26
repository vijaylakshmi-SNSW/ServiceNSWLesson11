// Q1.Create test cases for a function called multipleNumbers that should take 2 numbers as parameters and return the 
// product of those numbers.

const {expect} = require ("chai");
const { multipleNumbers } = require("../src/Common/multiply");

describe("testing the numbers module", () => {
    describe("testing the multipleNumbers function", () => {
        it("should return the sum of two numbers", () => {
            expect(multipleNumbers(4, 5)).to.eql(20);
        });
        it("should handle decimal numbers", () => {
            expect(multipleNumbers(4.5, 5)).to.eql(22.5);
        });
        it("should handle negative numbers", () => {
            expect(multipleNumbers(-4, 5)).to.eql(-20);
        });
        it("should throw an error if either parameter is not a number", () => {
            expect(() => multipleNumbers("A", "B")).to.throw();
            expect(() => multipleNumbers(1, "B")).to.throw();
            expect(() => multipleNumbers("A", 2)).to.throw();
        });
        // it("should work for strings if they can be parsed as numbers", () => {
        //     expect(multipleNumbers("4", 5)).to.eql(20);
        //     expect(multipleNumbers("4.5", 5)).to.eql(22.5);
        //     expect(multipleNumbers("-4", 5)).to.eql(-20);
        // });
        it("should throw an error when no numbers are passed in", () => {
            expect(() => multipleNumbers()).to.throw();
        });
        it("should throw an error when one number is passed in", () => {
            expect(() => multipleNumbers(1)).to.throw();
        });
    it("should throw an error if any one number is 0", () => {
        expect(()=> multipleNumbers()).to.throw();
    });
    });
});