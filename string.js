const address = "dhaka Barishal";

const part = address.slice(0, 5);
// console.log(part);

// console.log(address.split(""));
let address02 = "";
for (let i = 0; i < address.length; i++) {
  address02 = address[i] + address02;
}
console.log(address02);
