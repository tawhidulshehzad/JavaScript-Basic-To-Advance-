function countdown() {
  let count = 5;
  
  const intervalId = setInterval(() => {
      console.log(count);
      count--;

      if (count < 0) {
          clearInterval(intervalId);
          console.log("Countdown finished!");
      }
  }, 500);
}

countdown();
