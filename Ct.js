// program to generate random strings

// declare all characters
const characters =
  "A1BCDE2FGH3IJ4KLM5NOP6QRS7TUVW8XYZabc9defghijklmnopqrstuvwxyz~!@#$%^&*()_+|}{:/";

function generateString() {
  let result = "";
  const charactersLength = characters.length;

  for (let i = 1; i < charactersLength; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const getTheStr = generateString();
// We got the string

const removeCharacter = (inputData) => {
  let output = "";
  let lastChar = "";

  for (const letter of inputData) {
    if (letter !== lastChar) {
      output += letter;
      lastChar = letter;
    }
  }

  return output;
};

const testString = getTheStr;
const withOutRepeatChar = removeCharacter(testString);
console.log(withOutRepeatChar.slice(0, 10));
