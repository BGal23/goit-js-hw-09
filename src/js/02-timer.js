import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dataInput = document.getElementById("datetime-picker");
const btnStart = document.querySelector("[data-start]");
const daysBox = document.querySelector("[data-days]");
const hoursBox = document.querySelector("[data-hours]");
const minutesBox = document.querySelector("[data-minutes]");
const secondsBox = document.querySelector("[data-seconds]");

let yourData;
let timeId;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        checkDate(selectedDates[0])
    },
}

const checkDate = (selectedDate) => {
    const nowTime = new Date().getTime()
    yourData = selectedDate.getTime()
    
    if (yourData < nowTime) {
        alert("Please choose a date in the future")
        btnStart.setAttribute("disabled", "")
    } else {
    btnStart.removeAttribute("disabled", "")
    }
    if (timeId > 0){
        btnStart.setAttribute("disabled", "")
    }
    return
}

const calcTime = (ms) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    ms = ms - new Date().getTime()

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return {days, hours, minutes, seconds}
}

const changeDate = (value) => {

    timeId = setInterval(() => {
        daysBox.textContent = calcTime(value).days.toString().padStart(2,"0");
        hoursBox.textContent = calcTime(value).hours.toString().padStart(2,"0");
        minutesBox.textContent = calcTime(value).minutes.toString().padStart(2,"0");
        secondsBox.textContent = calcTime(value).seconds.toString().padStart(2,"0");
        if (value - new Date().getTime() < 900) {
            console.log("stop timer")
            clearInterval(timeId)
            timeId = 0;
            btnStart.removeAttribute("disabled", "")
        }
    }, 1000)
    btnStart.setAttribute("disabled", "")
}

flatpickr(dataInput, options);
btnStart.addEventListener("click", () => changeDate(yourData))