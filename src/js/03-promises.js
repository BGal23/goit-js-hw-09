const input = document.querySelectorAll("input")
const btnCreate = document.querySelector("button")

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  console.log(shouldResolve)
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const newTask = () => {
  setTimeout(() => {
    setInterval(() => {
      console.log(input[0].value - input[1].value)
    }, input[1].value)
  }, input[0].value - input[1].value)
}

btnCreate.addEventListener("click", newTask)