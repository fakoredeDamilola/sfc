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
    info: "Dolapo Salawu is an Investment Professional at African Capital Alliance (“ACA”), Nigeria’s foremost Private Equity Firm.<br><br>Prior to joining ACA, Dolapo was an Investment Banking Analyst at Coronation Merchant Bank Limited. He started his career with 2 summer internships at Bank of America in Investment Banking Division.<br><br>In his current role, his responsibilities include overseeing investments from inception through exit, structuring transactions and securing financial close for projects. Dolapo actively directs projects up to USD150M including multiple hospitality assets managed by Marriott International Inc.<br><br> Outside of work, Dolapo volunteers with organizations focused on creating opportunities for women and young people. Some of these organizations include SEO Africa, JA Nigeria and Beyond Rubies Inc.<br><br>Dolapo holds a Bachelor of Science degree in Economics from the University of Ibadan."
  },
  {
    img: "Abraham\ Durasawo.jpg",
    name: "Abraham Durasawo",
    info: "Abraham Durasawo is a veteran investment advisory professional. He possesses years of financial advisory and capital raising experience across power, oil & gas, infrastructure, insurance, manufacturing, technology, agriculture, financial services and real estate projects. He was a member of the team that developed the Economic Recovery and Growth Plan of the Federal Government.<br/><br/>He is a Certified Management Consultant and Fellow, Institute of Management Consultants. Enrolled in a dual Executive MBA at the Business School Netherlands and Quantic School of Business and Technology. He is a director at Unicorn Capital, Consultant to the Investment Banking Institute New York, first Finance Mentor from Africa on WallStreetOasis training, Finance Mentor with Founders Institute, Business Mentor with the Bid Network Foundation, Netherlands, and a Mentor with the Google Launchpad Start. He is a specialist in ECM, DCM, Project Finance and Mergers & Acquisition.<br/><br/>Abraham is an award-winning YALI Fellow, the Young African Leaders Initiative, winning the  2018 Star of Entrepreneurship for West Africa.<br/><br/>He is also a member of the Society for Corporate Governance of Nigeria."
  },
  {
    img: "Zeal\ Akariwe.jpg",
    name: "Zeal Akariwe",
    info: "Zeal holds a BSc in Actuarial Science from the University of Lagos and certifications from the London School of Economics (LSE) in Risk Management and Cambridge University in Human Diverstity. He boasts an impressive career in finance. After a year in Insurance, his banking experience started in 2000 in HR, Admin and Corporate Banking after which his treasury career started with Standard Chartered in 2004. He worked with Standard Chartered London in 2006 on the Africa Structuring desk where he focused on structuring of derivative transactions for the bank’s footprint. After this, he moved to act as the Head of the Sales team in Standard Chartered Zambia and then returned to Nigeria in 2008 to head Financial Markets Sales and was a key member of Standard Chartered’s Wholesale Bank management Team.<br><br> Zeal also founded “The Angel Project”, an organization focused on releasing convicted prisoners who have the option of fines while also engaging the office of the CJ of Lagos to decongest prisons and ensure justice is expedited for people who are awaiting trial. The Angel Project also pays the medical bills of selected impoverished patients.<br><br>Since 2015, he now runs Graeme Blaque Advisory, bringing financial solutions that span from regulatory interpretation and interphase to structuring simple transaction to ensure that the optimal result is obtained without flouting regulations. So far, his firm has acted as hedge adviser on an oil producing asset valued in excess of $2.5bn and in other financial advisory roles within the oil and gas and manufacturing sectors."
  },
  {
    img: "Temitope\ Oshin.jpg",
    name: "Temitope Oshin",
    info: "Temitope Oshin is a Chartered Certified Accountant with First Class honors in Economics and a Masters degree in Finance. She was a full time management consultant at a leading Nigerian bank and has led several projects and initiatives targeted at driving business process re-engineering, operating model redesign and enterprise process improvement and transformation.<br><br>Out of her passion to see more millennials take charge of their finance and embrace the money conversation, she founded <b>Finance With Tope<b> - a  platform that empowers and motivates individuals to take charge of their finances and lay a solid financial foundation for their future. Tope works with several individuals and companies across the world to help them make smart money decisions, save and invest money, access business funding and build a financially rewarding life.<br><br>In 2019, Tope launched the FWT Smart Money Community - a channel through which she is helping millennials set SMART financial goals and get the required support to achieve those goals. Under the community, Tope has helped over 100 people (within and outside Nigeria) invest over NGN50 Million across several sectors within the Nigerian economy."
  }
]
let speakerLink = document.querySelectorAll(".speakerLink")
let speakerName = document.querySelector(".speakerName")
let speakerImg = document.querySelector(".speakerImg")
let speakerInfo = document.querySelector(".speakerInfo")
Array.from(speakerLink).forEach(speaker => {

  speaker.addEventListener("click", function () {
    let click = this.dataset.id
    if (click == 4) {
      speakerImg.style.backgroundPosition = "center"
    }
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
