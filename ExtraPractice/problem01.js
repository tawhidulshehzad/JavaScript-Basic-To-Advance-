function vowelCountInAstr(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vCount = [0, 0, 0, 0, 0];

  const lowerStr = str.toLowerCase();
  for (const char of lowerStr) {
    const index = vowels.indexOf(char);
    if (index !== -1) {
      vCount[index]++;
    }
  }
  return vCount;
}
const giveStr = "I am a good eman";
console.log(vowelCountInAstr(giveStr));
