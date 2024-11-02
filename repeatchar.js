let counter = 0;
let address = "dhakad Barishal";
for (const letter of address) {
  // repeatCharacter += letter;
  if ("d" === letter) {
    counter += 1;
  }
}
console.log(counter);