function oddAvg(intArray) {
  let oddNumber = 0;
  let oddNumCount = 0;
  for (const number of intArray) {
    if (number % 2 !== 0) {
      oddNumCount++;
      oddNumber = oddNumber + number;
    }
  }
  return oddNumber / oddNumCount;
}

const integerArray = [5, 12, 9, 3, 21, 8, 17, 4, 15, 6];

const finlOut = oddAvg(integerArray).toFixed(3);
console.log(parseFloat(finlOut));


