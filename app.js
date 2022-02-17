let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

let interval;

const eventDay = new Date('03/03/2022');

// convert to milisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// implement countdown logic
const countDownFn = () => {
  const today = new Date();
  const timeSpan = eventDay - today;

  if (timeSpan <= -today) {
    console.log("Unfortunately we have past the event day");
    clearInterval(interval);
    return;
  } else if (timeSpan <= 0) {
    console.log("Today is the event day");
    clearInterval(interval);
    return;
  } else {
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    dayField.innerHTML = days;
    hourField.innerHTML = hours;
    minuteField.innerHTML = minutes;
    secondField.innerHTML = seconds;

  }

}

interval = setInterval(countDownFn, second);