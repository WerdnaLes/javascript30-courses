const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const hand = document.querySelector(".hand");

setInterval(setDate, 1000);

function setDate() {
  const currentTime = new Date();
  rotateSeconds(currentTime);
  rotateMinutes(currentTime);
  rotateHours(currentTime);
}

function rotateHours(date) {
  const hours = date.getHours();
  // Makes hour hand move closer to another hour according to minutes span:
  const hoursDegrees = (hours / 12) * 360 + (date.getMinutes() / 60) * 30 + 90;
  hoursHand.style.transform = setRotate(hoursDegrees, hoursHand);
}

function rotateMinutes(date) {
  const minutes = date.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = setRotate(minutesDegrees, minutesHand);
}

function rotateSeconds(date) {
  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = setRotate(secondsDegrees, secondHand);
}

// Resolve the problem of 'jumping' hands when they reach 90deg again:
function setRotate(deg, pointer) {
  if (deg === 90) {
    pointer.style.transition = "all 0s";
  } else {
    pointer.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  return `rotate(${deg}deg)`;
}
