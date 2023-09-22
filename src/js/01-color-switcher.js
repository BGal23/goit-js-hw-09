const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const background = document.querySelector("body")
let timerId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startColors = () => {
    timerId = setInterval(() => {
        background.style.backgroundColor = getRandomHexColor()
    },1000);

    btnStart.setAttribute("disabled", "");
    btnStop.removeAttribute("disabled", "");

    btnStart.removeEventListener("click", startColors);
    btnStop.addEventListener("click", stopColors);
    return
}

const stopColors = () => {
    clearInterval(timerId)

    btnStart.removeAttribute("disabled", "");
    btnStop.setAttribute("disabled", "");

    btnStop.removeEventListener("click", stopColors);
    btnStart.addEventListener("click", startColors);
    return
}

btnStart.addEventListener("click", startColors)