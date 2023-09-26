const input = document.querySelectorAll("input")
const btnCreate = document.querySelector("button")
let timerId;

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
  } else {
    // Reject
    console.log(`❌ Rejected promise ${position} in ${delay}ms`)
  }
}

const newTask = event => {
  event.preventDefault();
  let meter = 1;
  let delay = Number(input[0].value);
  setTimeout(() => {
    createPromise(meter, delay);
    timerId = setInterval(() => {
      meter++;
      delay += Number(input[1].value);
      createPromise(meter, delay);
      if (meter > Number(input[2].value) - 1) {
        clearInterval(timerId);
      }
    }, input[1].value);
  }, input[0].value);
};

btnCreate.addEventListener("click", newTask)