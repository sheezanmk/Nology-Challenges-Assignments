// Write a function which takes a sentence and capitalizes each word in that sentence e.g capitaliseEachWord("hello there my name is Alex") -> "Hello There My Name Is Alex"

function capitaliseEachWord(sentence) {
    const words = sentence.split(' ');
    const modifiedWords =[];
    for(let i= 0; i < words.length ; i++)
    {
        const word = words[i];
        const capitalisedWord = word.charAt(0).toUpperCase() +  word.substring(1).toLowerCase();
        modifiedWords.push(capitalisedWord);

    }
    return modifiedWords.join(" ");
}
console.log(capitaliseEachWord("Hi there my name is sheezan"));

//Write a function which takes a sentence and reverses each word in that sentence e.g reverseEachWord("hello there my name is Alex") -> "olleh ereht ym eman si xelA"

const reverseEachWord = (sentence) => {
    const words =sentence.split(" ");
    const modifiedWords = [];
    for (const word of words)
    {
        const reversedWord = word.split("").reverse().join("");
        modifiedWords.push(reversedWord);
    }
    return modifiedWords.join(" ");
}

console.log(reverseEachWord("my name is sheezan"));

//Write a function which takes a sentence and shouts each word (upper case plus exclaimation point) e.g shoutEachWord("hell there my name is Alex") -> "HELLO! THERE! MY! NAME! IS! ALEX!"

const shoutEachWord = (sentence) => {
    const words = sentence.split(" ");
    const modifiedWords = [];
    for (const word of words)
    {
        const shoutedWord = word.toUpperCase() + '!';
        modifiedWords.push(shoutedWord);

    }

    return modifiedWords.join(" ");
}

console.log(shoutEachWord('HI my name is sheezan'));

