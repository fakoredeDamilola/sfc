let form = document.querySelector("form")

let inputForm = document.querySelectorAll(".form-group input")


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
        input.value = ""
    })
    Array.from(selectForm).forEach(select => {
        newUser[select.id] = select.value
        select.value = ""
    })
    newUser.expectation = textForm.value
    textForm.value = ""
    Object.keys(newUser).forEach((key, index) => {
        if (newUser[key] === "") {
            dataValue[index] = false
        } else {
            dataValue[index] = true
        }
    })
    if (dataValue.every(value => value === true)) {
        saveResponse(newUser)
        // alert("Data completed, thank you for your time, we are looking forward to meeting you at FinXposition 1.0")

    } else {
        alert("Please fill all the information. Go through the form again")
    }
})


async function saveResponse(obj) {
    let url = "https://script.google.com/macros/s/AKfycbwARmZ351UkrwFtnBZ7hsqjeEeaw__xtEQclWUypaC3y_gq2Hc/exec"

    $.ajax({
        url: url,
        method: "POST",
        dataType: "xml",
        data: obj,
        statusCode: {
            0: function () {
                 alert("Data completed, thank you for your time, we are looking forward to meeting you at FinXposition 1.0")
                 
        window.location.replace("https://sfcui.org.ng/event/index.html");
            },
            200: function () {
                 alert("Data completed, thank you for your time, we are looking forward to meeting you at FinXposition 1.0")
                 
        window.location.replace("https://sfcui.org.ng/event/index.html");
            }
        }
    })


}