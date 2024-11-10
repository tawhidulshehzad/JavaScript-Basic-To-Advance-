function longestWord(str) {
  const splitStr = str.split(" ");
  const lengthOfWord = [];
  // let anotherLength = 0;
  for (const word of splitStr) {
    lengthOfWord.push(word.length);
    if (word.length > lengthOfWord.length) {
      lengthOfWord.push(word.length);
    }
  }
  return Math.max(...lengthOfWord);
}

console.log(longestWord("I am a Learner"));


