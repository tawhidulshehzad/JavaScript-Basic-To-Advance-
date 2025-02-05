function hasPairWithSum(arr, sum) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasPairWithSum([1, 2, 7, 8, 9], 9));
