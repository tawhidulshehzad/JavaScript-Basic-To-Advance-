function oddAvg(intArray) {
  let oddNumber = 0;
  let oddNumCount = 0;
  for (const number of intArray) {
    if (number % 2 !== 0) {
      oddNumCount++;
      oddNumber = oddNumber + number;
    }
  }
  // const getTheAvg = oddNumCount > 0 ? oddNumber / oddNumCount : 0;
  return oddNumCount > 0 ? oddNumber / oddNumCount : 0;
}

const integerArray = [42, 13, 58, 65, 81, 96, 5, 5];

console.log(parseFloat(oddAvg(integerArray).toFixed(3)));

// another way
const numbers = [42, 13, 58, 65, 81, 96, 5, 5];

// Function to calculate the count and average of odd numbers
function calculateOddStats(arr) {
  let oddSum = 0;
  let oddCount = 0;

  for (const num of arr) {
    if (num % 2 !== 0) {
      oddSum += num;
      oddCount++;
    }
  }

  // Calculate the average of odd numbers
  const oddAvg = oddCount > 0 ? oddSum / oddCount : 0;

  return {
    oddCount: oddCount,
    oddAverage: oddAvg.toFixed(2), // Round to two decimal places
  };
}

const result = calculateOddStats(numbers);
console.log(`Odd Count: ${result.oddCount}`);
console.log(`Average of Odd Numbers: ${parseFloat(result.oddAverage)}`);
