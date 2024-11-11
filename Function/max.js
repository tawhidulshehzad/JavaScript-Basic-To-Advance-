const phones = [
  { name: "iphone", type: "12mp", price: "120" },
  { name: "iphone", type: "12mp", price: "125" },
  { name: "iphone", type: "12mp", price: "130" },
  { name: "iphone", type: "12mp", price: "150" },
];

function getTheCheapestPhone(phones) {
  let cheapPhone = phones[0];
  for (const phone of phones) {
    if (phone.price < cheapPhone.price) {
      cheapPhone = phone;
    }
  }
  console.log(cheapPhone);
}

getTheCheapestPhone(phones);
