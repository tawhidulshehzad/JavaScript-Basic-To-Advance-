const address = "dhaka japanioueaeiou";
console.log(address.includes("z"));
let counter = 0;
let newStr = "";
for (let i = 0; i < address.length; i++) {
  if (
    ("a" === address[i] ||
      "e" === address[i] ||
      "i" === address[i] ||
      "o" === address[i] ||
      "u" === address[i]) &&
    newStr.includes(address[i]) === false
  ) {
    counter += 1;
    newStr += address[i];
  }
}
console.log("All vowels are here ", counter);
