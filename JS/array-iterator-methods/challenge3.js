// function mySome(arr, predicate) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log('Runs');
//     if (predicate(arr[i])) {
//       fast to succeed
//       return true;
//     }
//   }
//   return false;
// }

// write your own every implementation
function myEvery(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    console.log('Runs');
    if (!predicate(arr[i])) {
      // fast to fail
      return false;
    }
  }
  return true;
}

const grades = [12, 14, 23, 8, 10, 28, 17, 20];
console.log(myEvery(grades, (g) => g >= 10));