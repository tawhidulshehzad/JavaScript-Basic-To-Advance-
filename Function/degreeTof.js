function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Example usage
const tempCelsius = 37;
const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C is equal to ${tempFahrenheit}°F`);
