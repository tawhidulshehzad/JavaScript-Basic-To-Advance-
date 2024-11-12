const name = "ami";

function checkName(name) {
  const normalizedName = name.toLowerCase();
  const lastIndex = normalizedName.length - 1;
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(normalizedName[lastIndex])) {
    console.log("good");
  } else {
    console.log("bad");
  }
}
checkName(name);
