let firstName = document.getElementById("fname");
let lastName = document.querySelector(".lname");
let phoneNumber = document.getElementById("phone");
let input = document.querySelectorAll("input[type=text]");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

const radio1 = document.querySelectorAll('input[type="radio"]');
const checklist = document.querySelectorAll('input[type="checkbox"]');

let label = document.getElementsByClassName("label");
const submit = document.querySelector("#submit");

//------------ submit validation-----------------------------

submit.addEventListener("click", () => {
  let fnameValue = firstName.value;
  if (!fnameValue) {
    document.getElementById("error-firstname").innerText =
      "please insert your Name";
    document.getElementById("error-firstname").style.color = "red";
    firstName.style.borderColor = "red";
  }
  let lnameValue = lastName.value;
  if (!lnameValue) {
    document.getElementById("error-lastname").innerText =
      "please insert your Last Name";
    document.getElementById("error-lastname").style.color = "red";
    lastName.style.borderColor = "red";
  }
  let phoneValue = phoneNumber.value;
  if (phoneValue.length != 11) {
    document.getElementById("error-phone").innerText =
      "your phone Number should be 11 digit";
    document.getElementById("error-phone").style.color = "red";
    phoneNumber.style.borderColor = "red";
  }
  let emailValue = email.value;
  if (!emailValue) {
    document.getElementById("error-email").innerText =
      "you must insert a valid email";
    document.getElementById("error-email").style.color = "red";
    email.style.borderColor = "red";
  }
  let passwordValue = password.value;
  if (!passwordValue) {
    alert("you must set a password");
    password.style.borderColor = "red";
  }

  let radioSelect;
  for (let radio of radio1) {
    if (radio.checked) {
      radioSelect = radio.value;
      break;
    }
  }
  if (radioSelect) {
    console.log(radioSelect);
  } else {
    alert("you didnt chose your gender");
  }

  // let checklist = document.getElementsByClassName("check").checked;
  // for (checkbox in checklist) {
  //   if (checked == true) {
  //     console.log(document.getElementsByClassName("check").value);
  //   }
  // }

  for (let i = 0; i < checklist.length; i++) {
    if (checklist[i].checked == true) {
      console.log(checklist[i].value);
    }
  }

  // let checkSelect = [];
  // for (let checkbox of checklist) {
  //   if (checkbox.checked) {
  //     checkSelect.push(checkbox.value);
  //   }
  // }
  // console.log(checkSelect);
});
