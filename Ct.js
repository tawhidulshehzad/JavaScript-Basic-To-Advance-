// program to generate random strings

// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+|}{:/";

function generateString() {
  let result = " ";
  const charactersLength = characters.length;

  for (let i = 0; i < charactersLength; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const getTheStr = generateString();
const eleminateSameConsecutiveCharacters =
    (inputData) => {
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

const testString = "Geeks For Geeks";
console.log(
    eleminateSameConsecutiveCharacters(
        testString
    )
);
