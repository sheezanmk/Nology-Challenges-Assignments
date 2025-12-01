//  Get day function

  function getToday() {
    const today = new Date().getDay(); // built in fxn; extracts the day from the date object
    if (today===0) return "Sunday";
    else if (today===1) return "Monday";
    else if (today===2) return "Tuesday";
    else if (today===3) return "Wednesday";
    else if (today===4) return "Thursday";
    else if (today===5) return "Friday";
    else return "Saturday";
}
console.log("Today is " +getToday()); 


//Using switch

function getToday() {
    const currentDay =new Date().getDay();

    switch (currentDay) {

        case 0: return "Monday";
       
        case 1: return "Tuesday";
       
        case 2: return "Wednesday";
        
        case 3: return "Thurday";

        case 4: return "Friday";
        
        case 5: return "Saturday";
        
        case 6: return "Sunday";
        
    }
   
}
console.log("Today is " +getToday());