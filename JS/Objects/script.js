const countOccurances = (arr) =>
{
    const counter ={};

    for (let i=0 ; i< arr.length; i++)
    {
        const fruit =arr[i];
        if(counter[fruit]) {
            counter[fruit]++;
        }
        else {
            counter[fruit]=1;
        }
    }
    return counter;
};

const fruits = ['apple', 'apple', 'pear', 'orange', 'apple', 'pear'];
console.log(countOccurances(fruits));