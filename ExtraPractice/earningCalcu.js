function monthlySavings(allPayments, livingCost, taxRate) {
  // Validate input types
  if (
    !Array.isArray(allPayments) ||
    typeof livingCost !== "number" ||
    typeof taxRate !== "number"
  ) {
    return "invalid input";
  }

  let totalIncome = 0;

  // Loop through all payments to calculate total income after tax
  for (let payment of allPayments) {
    if (payment >= 3000) {
      totalIncome += payment * (1 - taxRate / 100); // Apply tax rate on payments ≥ 3000
    } else {
      totalIncome += payment; // No tax on payments < 3000
    }
  }

  // Calculate savings after deducting living cost
  let savings = totalIncome - livingCost;

  // If savings are 0 or less, return "earn more"
  if (savings <= 0) {
    return savings === 0 ? 0 : "earn more";
  }

  // Return the total savings if it's positive
  return savings;
}

// Test cases
// console.log(monthlySavings([1000, 2000, 3000], 5400, 20)); // Output: 0, with 20% tax
// console.log(monthlySavings([1000, 2000, 2500], 5000, 20)); // Output: 500, with 20% tax
// console.log(monthlySavings([900, 2700, 3400], 10000, 20)); // Output: "earn more", with 20% tax
// console.log(monthlySavings([900, 2700, 3400], 10000, 35)); // Output: "earn more", with 35% tax on amounts >= 3000
// console.log(monthlySavings(100, [900, 2700, 3400], 20)); // Output: "invalid input"

const aArray = [1, 22, 1, 22, 3, 5, 5];
console.log;

console.log(Array.from(new Set(aArray)));
