//create a time interval

let deadline = "2020-11-21 10:00";
let daysVal = document.querySelector(".daysVal");
let hoursVal = document.querySelector(".hoursVal");
let minutesVal = document.querySelector(".minutesVal");
let secondsVal = document.querySelector(".secondsVal");
let deadlineDate = new Date(deadline);
function createValue(time) {
  let days = Math.floor(time / (3600 * 24));
  let hours = Math.floor((time % (3600 * 24)) / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  let values = { days, hours, minutes, seconds };
  return values;
}
function setTimeUI(time) {
  let x = setInterval(function () {
    let now = new Date().getTime();
    let later = time.getTime();
    let timeDiff = (later - now) / 1000;
    let values = createValue(timeDiff);
    daysVal.innerHTML = values.days;
    hoursVal.innerHTML = values.hours > 9 ? values.hours : `0${values.hours}`;
    minutesVal.innerHTML =
      values.minutes > 9 ? values.minutes : `0${values.minutes}`;
    secondsVal.innerHTML =
      values.seconds > 9 ? values.seconds : `0${values.seconds}`;
  }, 1000);
}

setTimeUI(deadlineDate);
let links = document.querySelectorAll(".links li a");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  console.log(links);
  e.preventDefault();
  const href = this.getAttribute("href");
  console.log(href);
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
