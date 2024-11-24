function hasPairWithSum(arr, sum) {
  const seen = new Set();

  for (let num of arr) {
    const complement = sum - num;

    if (seen.has(complement)) {
      return true; // Found a pair
    }

    seen.add(num); // Store the number in the Hash Set
  }

  return false; // No pair found
}

console.log(hasPairWithSum([9, 5, 7, 8, 1], 9)); // true
