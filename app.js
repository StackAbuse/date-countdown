let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

let interval;

// Convert to milisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

var eventDay = new Date();
// Setting event dat a week from current date for the demo to work in perpetuity
eventDay = new Date(eventDay.getTime() + 7 * day);

// Implement countdown logic
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
