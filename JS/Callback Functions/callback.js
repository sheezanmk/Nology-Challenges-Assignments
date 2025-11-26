const modifySentence = (sentence, modifer) => {
  const words = sentence.split(' ');
  const modifiedWords = [];
  for (const word of words) {
    const modfiedWord = modifer(word);
    modifiedWords.push(modfiedWord);
  }
  return modifiedWords.join(' ');
};

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

const reverseString = (str) => {
  // const charArray = str.split("");
  // charArray.reverse();
  // const reversedStr = charArray.join("");
  // return reversedStr;
  return str.split('').reverse().join('');
};

const internetSpeak = (word) => {
  // replace o with 0
  let temp = word.replaceAll('o', '0');
  // replace e with 3
  temp = temp.replaceAll('e', '3');
  // replace i with 1
  temp = temp.replaceAll('i', '1');
  // replace a with ^
  temp = temp.replaceAll('a', '^');
  return temp;
};

const shout = (str) => str.toUpperCase() + '!';

console.log(modifySentence('hello my name is Alex', capitalise));
console.log(modifySentence('hello my name is Alex', reverseString));
console.log(modifySentence('hello my name is Alex', shout));
console.log(modifySentence('hello my name is Alex', internetSpeak));