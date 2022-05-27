const newYear = new Date('Jan 1 2023 00:00:00');

const daysValue = document.getElementById('days');
const hoursValue = document.getElementById('hours');
const minutesValue = document.getElementById('minutes');
const secondsValue = document.getElementById('seconds');

function timeCounter() {
  let now = new Date();

  let leftUntill = newYear - now;
  let days = Math.floor(leftUntill / 1000 / 60 / 60 / 24);
  let hours = Math.floor(leftUntill / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(leftUntill / 1000 / 60) % 60;
  let seconds = Math.floor(leftUntill / 1000) % 60;

  daysValue.innerHTML = days;
  hoursValue.innerHTML = hours;
  minutesValue.innerHTML = minutes;
  secondsValue.innerHTML = seconds;
}

timeCounter();
setInterval(timeCounter, 1000);
