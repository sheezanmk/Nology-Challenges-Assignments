import { rectangleArea } from "./rectangle-area";

const incorrectDataTypeError = new Error(
  "Both width and height need to be numbers"
);

xdescribe("Test cases for a function that calculates the area of a rectangle", () => {
  test("Given two positive numbers it calculates the area", () => {
    expect(rectangleArea(2, 2)).toBe(4);
    expect(rectangleArea(6, 2)).toBe(12);
    expect(rectangleArea(1.2, 1.2)).toBe(1.44);
    expect(rectangleArea(1.222, 1.234)).toBe(1.51);
  });

  test("Throws an error when negative numbers or 0 are passed", () => {
    expect(() => rectangleArea(-10, -5)).toThrow(
      "Both height and width need to be positive numbers"
    );
    expect(() => rectangleArea(8, -6)).toThrow(
      "Both height and width need to be positive numbers"
    );
  });

   test("Throws an error when one or both parameters are not numbers", () => {
        expect(() => {
            rectangleArea("hello", "world");
        }).toThrow(incorrectDataTypeError);
        expect(() => {
            rectangleArea(1, "world");
        }).toThrow(incorrectDataTypeError);
        expect(() => {
            rectangleArea("world", 67);
        }).toThrow();
        expect(() => {
            rectangleArea("world", -67);
        }).toThrow(new Error("Both width and height need to be numbers"));
        expect(() => {
            rectangleArea("0", "1");
        }).toThrow(new Error("Both width and height need to be numbers"));
    });

    test("Throws an error when zero or one parameters are passed", () => {
        expect(() => {
            rectangleArea();
        }).toThrow(new Error("This function needs two parameters"));
        expect(() => {
            rectangleArea("hello");
        }).toThrow(new Error("This function needs two parameters"));
        expect(() => {
            rectangleArea(1);
        }).toThrow(new Error("This function needs two parameters"));
    });

});
