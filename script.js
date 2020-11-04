//create a time interval

let deadline = "2020-11-21 10:00";
let daysVal = document.querySelector(".daysVal");
let hoursVal = document.querySelector(".hoursVal");
let minutesVal = document.querySelector(".minutesVal");
let secondsVal = document.querySelector(".secondsVal");
let deadlineDate = new Date(deadline);
let speakers = [
  {
    img: "MARIAM\ MOMODU.jpg",
    name: "MARIAM MOMODU",
    info: "Mariam is a Doctoral Candidate and Vanier Scholar at the University of Toronto Law Faculty, where she specializes in international trade law and law and development. She obtained a master’s degree in law from the University of Cambridge on a Commonwealth Shared Scholarship. She obtained her undergraduate law degree from the University of Ibadan, Nigeria.<br/><br/> Mariam is the founder of GetIn Education Consulting; a social enterprise that equips young people from underrepresented backgrounds with the skills and knowledge required to access quality education and compete globally. GetIn also advocates for quality education in developing countries.<br/><br/>Mariam has received several recognitions for her work in education and development. She was recognised by McKinsey and Co. as one of the 40 Next Generation Women Leaders in Nigeria and was a delegate at the World Youth Forum in 2019."
  }
]
let speakerLink = document.querySelectorAll(".speakerLink")
let speakerName = document.querySelector(".speakerName")
let speakerImg = document.querySelector(".speakerImg")
let speakerInfo = document.querySelector(".speakerInfo")
Array.from(speakerLink).forEach(speaker => {

  speaker.addEventListener("click", function () {
    let click = this.dataset.id
    speakerInfo.innerHTML = speakers[click].info
    speakerName.innerHTML = speakers[click].name
    speakerImg.src = speakers[click].img
  })
})
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
