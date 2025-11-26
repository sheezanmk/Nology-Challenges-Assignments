const form = document.querySelector("form");
const ageInput = document.querySelector("#age");
const countryInput = document.querySelector("#country");
const drunkInput = document.querySelector("#drunk");
const button = document.querySelector("#btn");
const beerImg = document.querySelector("img");
const bottleRed = "./assets/red_beer.svg";
const bottleGreen = "./assets/green_beer.svg";
const message = document.querySelector('#message');


const legalAge = (age, country) => {
  if ( age >= 18 && (country === "Australia" || country === "Poland" || country === "UK")
  ) {
    return true;
  }
  if (age >= 21 && country === "USA") {
    return true;
  }
  return false;
};

form.addEventListener("submit", (event) => {
event.preventDefault();
  const age = Number(ageInput.value);
  const country = countryInput.value;
  const drunkLevel = Number(drunkInput.value);
  const isLegalAge = legalAge(age, country);
 
  let reply = "";

  if (isLegalAge && drunkLevel===0) {
 
    beerImg.src = bottleGreen;
    reply = "Come In!";
  }
  else {
   beerImg.src=bottleRed;
    reply="You cannot come in";
  }


  const replyMsg=message;
  replyMsg.textContent =reply;
  form.reset();

});
