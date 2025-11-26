// Write your own implementations of find, findLast, and findIndex
const students = ['alice', 'Bob', 'Charlie', 'Dylan', 'Ed', 'Alex', 'adam'];

function find(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
}
console.log(find(students, (s) => s.charAt(0).toLowerCase() === 'a'));
console.log(find(students, (student) => student.length < 3));

const findLast = (arr, predicate) => {
  for (let i = arr.length - 1; i >= 0; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
};

console.log(findLast(students, (s) => s.charAt(0).toLowerCase() === 'a'));

function findIndex(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(students, (s) => s.length > 5));
console.log(findIndex(students, (s) => s.length > 10));