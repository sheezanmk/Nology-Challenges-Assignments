const numbers = [1, 2, 3, 4, 5];
// only using loops
// create a new array where each number is incremented by 1
// const incrementedNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   incrementedNumbers.push(numbers[i] + 1);
// }
// console.log(incrementedNumbers);
// create a new array where each number is squared
// const squaredNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   squaredNumbers.push(numbers[i] ** 2);
// }
// console.log(squaredNumbers);

const grades = [12, 14, 23, 8, 10, 28, 17, 20];
// these represent grades for a quiz out of 30
// convert each of these grades to a percentage
// and give me a new array of percentages
// const percentages = [];
// for (let i = 0; i < grades.length; i++) {
//   const grade = grades[i];
//   const percentage = Math.round((grade / 30) * 100) + '%';
//   percentages.push(percentage);
// }
// console.log(percentages);

function transformArray(arr, callback) {
  console.log(typeof callback);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const transformed = callback(arr[i]);
    newArr.push(transformed);
  }
  return newArr;
}

function increment(num) {
  return num + 1;
}
function convertToPercentage(numerator, demoninator) {
  console.log(numerator);
  console.log(demoninator);
  //   console.log(numerator / demoninator);
  return Math.round((numerator / demoninator) * 100) + '%';
}
// console.log(transformArray(numbers, increment));
// console.log(transformArray(numbers, (num) => num + 1));
// console.log(transformArray(numbers, (n) => n ** 2));
console.log(transformArray(grades, (grade) => convertToPercentage(grade, 30)));