const passwordObject = { name: "rahat", birthYear: 2002, siteName: "Facebook" };

function makePassword(obj) {
  const keys = Object.keys(obj);
  const numberType = obj[keys[1]] + "";
  if (keys.length <= 2 || numberType.length <= 3) {
    return "invalid";
  }
  let newPassword = "";
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    let value = obj[key];
    if (i === keys.length - 1) {
      newPassword += value[0].toUpperCase() + value;
    } else if (i === keys.length - 2) {
      newPassword += "#" + value;
    } else {
      newPassword += "@" + value;
    }
  }
  return newPassword[0] + newPassword.slice(2);
}

console.log(makePassword(passwordObject));
