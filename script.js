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
  },
  {
    img: "Dolapo\ Salawu.jpg",
    name: "DOLAPO SALAWU",
    info: "Dolapo Salawu is an Investment Professional at African Capital Alliance (“ACA”), Nigeria’s foremost Private Equity Firm. <br/><br/>Prior to joining ACA, Dolapo was an Investment Banking Analyst at Coronation Merchant Bank Limited. He started his career with 2 summer internships at Bank of America in Investment Banking Division. <br/><br/>In his current role, he is responsible includes overseeing investments from inception through exit, structuring transactions and securing financial close for projects. Dolapo actively directs projects up to USD150m including multiple hospitality assets managed by Marriott International Inc.<br/><br/>Outside of work, Dolapo volunteers with organizations focused on creating opportunities for women and young people. Some of these organizations include SEO Africa, JA Nigeria and Beyond Rubies Inc.<br/><br/>Dolapo holds a Bachelor of Science degree in Economics from the University of Ibadan."
  },
  {
    img: "Abraham\ Durasawo.jpg",
    name: "Abraham Durasawo",
    info: "Abraham Durasawo is a veteran investment advisory professional. He possesses years of financial advisory and capital raising experience across power, oil & gas, infrastructure, insurance, manufacturing, technology, agriculture, financial services and real estate projects. He was a member of the team that developed the Economic Recovery and Growth Plan of the Federal Government.<br/><br/>He is a Certified Management Consultant and Fellow, Institute of Management Consultants. Enrolled in a dual Executive MBA at the Business School Netherlands and Quantic School of Business and Technology. He is a director at Unicorn Capital, Consultant to the Investment Banking Institute New York, first Finance Mentor from Africa on WallStreetOasis training, Finance Mentor with Founders Institute, Business Mentor with the Bid Network Foundation, Netherlands, and a Mentor with the Google Launchpad Start. He is a specialist in ECM, DCM, Project Finance and Mergers & Acquisition.<br/><br/>Abraham is an award-winning YALI Fellow, the Young African Leaders Initiative, winning the  2018 Star of Entrepreneurship for West Africa.<br/><br/>He is also a member of the Society for Corporate Governance of Nigeria."
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
    speakerImg.style.backgroundImage = `url("${speakers[click].img}")`
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
