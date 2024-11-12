const name = "ami";

function checkName(name) {
  if (typeof name !== "string") {
    return "It is not a name";
  }
  const lastChar = name.toLocaleLowerCase().at(-1);
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(lastChar)) {
    return "Good";
  } else {
    return "bad";
  }
}
console.log(checkName(name));
