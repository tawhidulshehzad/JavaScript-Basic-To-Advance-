function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid number";
  }
  let savings = 0;
  for (const salary of arr) {
    if (salary >= 3000) {
      savings += salary * 0.8;
    } else {
      savings += salary;
    }
  }

  const totalSavings = savings - livingCost;
  if (totalSavings < 0) {
    return "Earn More";
  }
  return totalSavings;
}

console.log(monthlySavings([1000, 2000, 2500], 5000));
