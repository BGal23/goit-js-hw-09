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

const newTask = (event) => {
  event.preventDefault()
  let meter = 1;
  let delay = input[0].value*1;
  setTimeout(() => {
    timerId = setInterval(() => {
      createPromise(meter, delay)
      meter++;
      delay = delay + input[1].value*1
      if (meter - 1 >= input[2].value) {
        clearInterval(timerId)
      }
    }, input[1].value)
  }, input[0].value - input[1].value)
}

btnCreate.addEventListener("click", newTask)