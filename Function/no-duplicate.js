function removeDuplicates(arr) {
  const seen = new Set(); const uniqueArray = [];
  for (const item of arr) {
    const normalizedItem = typeof item === "string" ? item.toLowerCase() : item;
    if (!seen.has(normalizedItem)) { seen.add(normalizedItem); uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

// Test cases
console.log(removeDuplicates([42, 13, 13, 58, 65, 81, 96, 5, 5, 42])); // Output: [42, 13, 58]
console.log(removeDuplicates(["Hello", "world", "HELLO"])); // Output: ["hello", "world"]
console.log(removeDuplicates([5, "test", "TEST", 8])); // Output: [5, "test", 8]
console.log(removeDuplicates([1, 2, 3, "apple"])); // Output: [1, 2, 3, "apple"]

console.log("===========================");

function removeDuplicates(arr) {
  const uniqueArray = [];

  for (const element of arr) {
    const normalizedElement =
      typeof element === "string" ? element.toLowerCase() : element;

    // Check if normalizedElement already exists in uniqueArray
    if (
      !uniqueArray.some((item) => {
        return (
          (typeof item === "string" ? item.toLowerCase() : item) ===
          normalizedElement
        );
      })
    ) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

// Test cases
console.log(removeDuplicates([42, 13, 58, 42])); // Output: [42, 13, 58]
console.log(removeDuplicates(["hello", "world", "HELLO"])); // Output: ["hello", "world"]
console.log(removeDuplicates([5, "test", "TEST", 8])); // Output: [5, "test", 8]
console.log(removeDuplicates([1, 2, 3, "apple"])); // Output: [1, 2, 3, "apple"]
