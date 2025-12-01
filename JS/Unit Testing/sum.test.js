import { sum } from "./sum.js";

describe("Sum Function", () => {
  test("Return sum as 0 even when no arguments are passed", () => {
    expect(sum()).toBe(0);
  });

  test("Calculates sum when any number of values are passed", () => {
    expect(sum(1)).toBe(1);
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(1, 2, 5, 8, 9)).toBe(25);
  });

  test("throw an error if any value passed is not a number", () => {
    expect(() => sum(1, "3")).toThrow("All values must be numbers");
    expect(() => sum(true, 5)).toThrow("All values must be numbers");
    expect(() => sum(true, NaN)).toThrow("All values must be numbers");
    expect(() => sum("hi", 5)).toThrow("All values must be numbers");
  });

  test("throws an error when undefined is passed", () => {
    expect(() => sum(1, undefined, 3)).toThrow(
      "All values must be numbers");
  });

  test("throws an error when NaN is passed", () => {
      expect(() => sum(1, NaN, 3)).toThrow("All values must be numbers");
    });


});
