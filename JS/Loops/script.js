///sum function

function sum(n){

    let result=0;

for (let i=1; i<=n; i++)
{
    result=result+i;
}
return result;
}

console.log("Sum is " +sum(5));
console.log("Sum is " +sum(4)); 


//
const numbers = [1, 2, 3, 4, 5];

let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);