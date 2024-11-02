const timer = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const foo = async (time, count) => {
  for (let i = 0; i < count; i++) {
    await timer(time);
    console.log(`${i}`);
  }
};

//execute every 2 sec
let time = 1000;
let count = 5;

foo(time, count);
