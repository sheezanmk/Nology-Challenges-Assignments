//Even-Odd
let n =7;
let result;
if (n % 2===0)

    {
        result =n + " is even";
    }

    else {
        result = n + " is odd"
    } 

    console.log (result);

    //user prompt

    let num =prompt("Enter a number:");
    let answer ="";

    if (num % 2 ===0) {
        answer = num + " is even";
    }

    else 
    {
        answer= num + " is odd";
    }
       
    console.log(answer);

     
    //Ternary Operators
  let x = parseInt(prompt("Enter a number:"));

let res = (x % 2 === 0) 
  ? x + " is even" 
  : x + " is odd";

console.log(res);