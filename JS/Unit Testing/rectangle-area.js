//what should we test - given correct inputs it returns the correct output
//given two numbers we get the area back calculated correct;y

//edge cases
//how to handle incorrect inputs -
// 1. both parameters need to be valid numbers -should throw an error if atleast one parameter is not a parameter
// 2. what will make a number valid - positive numbers - otherwise throw an error - both height and width needto be positive numbers
// 3. missing parameters - should throw an error when one or zero parameters are passed




// export const rectangleArea = (height, width) => {
//   if (typeof height === "number" && typeof width === "number") {
//     if (height > 0 && width > 0) {
//       return Number((height * width).toFixed(2));
//     } else {
//       throw new Error("Both height and width need to be positive numbers");
//     }
// }

//   throw new Error("Both width and height need to be numbers");
// };

export const rectangleArea = (height, width) => {
    if (height === undefined || width === undefined) {
        throw new Error("This function needs two parameters");
    }
    if (typeof height !== "number" || typeof width !== "number") {
        throw new Error("Both width and height need to be numbers");
    }

    if (height <= 0 || width <= 0) {
        throw new Error("Both height and width need to be positive numbers");
    }

    return Number((height * width).toFixed(2));
}
