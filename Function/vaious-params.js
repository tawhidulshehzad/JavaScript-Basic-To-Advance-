function evenSizedString(str) {
  const sizeStr = str.length;
  return sizeStr;
}
const mainString = evenSizedString("hello");
console.log(mainString);

function countZero(binaryString) {
  // Count the occurrences of '0' in the binary string
  return (binaryString.match(/0/g) || []).length;
}

/* write a function called count_Zero () which will take a binary string  as parameter and count how many 0s are there in that string */

const binaryStr = "2132";
console.log(countZero(binaryStr));
