function removeRepeatElement(elements) {
  let newArray = [];

  for (const key of elements) {
    const normalized = key.toLowerCase();
    if (!newArray.includes(normalized)) {
      newArray.push(key);
    }
  }
  console.log(newArray);
}

removeRepeatElement(["ami", "tumi", "se", "Se", "tai", "tai"]);
