let form = document.querySelector("form")
let inputForm = document.querySelectorAll(".form-group input")
var firebaseConfig = {
    apiKey: "AIzaSyBjtTuXY-B3R_-9TRxJduCQwS-_MR8odp4",
    authDomain: "finxposition.firebaseapp.com",
    databaseURL: "https://finxposition.firebaseio.com",
    projectId: "finxposition",
    storageBucket: "finxposition.appspot.com",
    messagingSenderId: "306330836144",
    appId: "1:306330836144:web:9a3a23a40880c2d799af75",
    measurementId: "G-HCQ6H4BYSF"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

let selectForm = document.querySelectorAll(".form-group select")
let dataValue = [false, false, false, false, false, false, false, false]
let textForm = document.querySelector("textarea")
let newUser = {
    email: "",
    name: "",
    university: "",
    courseOfStudy: "",
    careerFocus: "",
    hearAboutEvent: "",
    gradeLevelOfInterest: "",
    expectation: ""
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(inputForm)
    Array.from(inputForm).forEach(input => {
        newUser[input.id] = input.value
    })
    Array.from(selectForm).forEach(select => {
        newUser[select.id] = select.value
    })
    newUser.expectation = textForm.value
    Object.keys(newUser).forEach((key, index) => {
        if (newUser[key] === "") {
            dataValue[index] = false
        } else {
            dataValue[index] = true
        }
    })
    if (dataValue.every(value => value === true)) {
        saveResponse(newUser)
    } else {
        alert("Please fill all the information. Go through the form again")

    }
})


function saveResponse(obj) {
    //get responses
    // db.collection("responses").get().then(snap => {
    //     snap.forEach(data => {
    //         console.log(data.data())
    //     })
    // })
    db.collection("responses").add(obj)
        .then(doc => alert("Data completed, thank you for your time, we are looking forward to meeting you at finXposition 1.0"))
    window.location.replace("https://sfcui.org.ng/event/index.html");
}