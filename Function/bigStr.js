function getTheLongestString(arr) {
  let longestStr = arr[0];

  for (const element of arr) {
    if (element.length > longestStr.length) {
      longestStr = element;
    }
  }

  console.log("Longest String:", longestStr);
}

const fruits = ["apple", "orange", "watermelon", "mango000"];
// getTheLongestString(fruits); // Output: "watermelon"
