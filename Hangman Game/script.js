// Words to Guess

const wordsToGuess = ["coffee", "rainbow", "javascript", "sun", "bottle"];

//Grab all DOM Elements

const hangmanImage = document.querySelector("#hangman-img");
const wordDisplay = document.querySelector("#word-display");
const wrongLetterSpan = document.querySelector("#wrong-letters");
const guessesLeftSpan = document.querySelector("#guesses-left");
const letterButtons =  document.querySelectorAll(".game__buttons__letter");
const resultMsg = document.querySelector("#result-message");
const playAgainBtn = document.querySelector("#play-again-button");

//Game Initial Stage

let selectedWord = "";
let correctGuesses = [];
let wrongGuesses = [];
let remainingGuesses = 11;

//Generating a random word from the guess word array

const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsToGuess.length);
    return wordsToGuess[randomIndex];
};


//Hiding the word with underscores

const displayUnderscores = () => {
    const display = selectedWord.split("").map((letter) => (correctGuesses.includes(letter)? letter : "_")).join(" ");

    wordDisplay.textContent = display;

}

//Initial stage of the game

const initialGameStage = () => {
    selectedWord = randomWord();
    //console.log(selectedWord);
    correctGuesses = [];
    wrongGuesses = [];
    remainingGuesses = 11;

    hangmanImage.src = "./assets/img/h-0.JPG";
    wrongLetterSpan.textContent = "";
    guessesLeftSpan.textContent = remainingGuesses;
    resultMsg.textContent = "";

    for (let i = 0; i < letterButtons.length ; i++ )
    {
        letterButtons[i].disabled = false;
    }

    displayUnderscores();

};

// Starting the game

initialGameStage();

