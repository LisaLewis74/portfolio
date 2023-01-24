// Lisa Anne Lewis, JavaScript File for my portfolio
// January 6, 2023, Student ID# 699355575*/

"use strict"; //interpret document contents in JavaScript strict mode

function displayValues() {
  let output = "";
  // generate the output//
  document.getElementById("fName").value = fName;
  document.getElementById("lName").value = lName;
  document.getElementById("address").value = address;
  document.getElementById("city").value = city;
  document.getElementById("province").value = province;
  document.getElementById("code").value = code;
  document.getElementById("pNumber").value = pNumber;
  document.getElementById("email").value = email;
  document.getElementById("output").innerHTML = output;
  console.log(output);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function OnSubmit() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "data.txt");

  let data = JSON.parse(document.getElementById("data").value);
  if (data.length == 0) {
    alert("Please load data.");
    return;
  }
}

function OnSuccess(data, status) {
  let output = "";
  for (let i = 0; i < data.length; i++) {
    output += data[i] + "<br>";
  }
  document.getElementById("output").innerHTML = output;
}

/*remove default values and formatting from state and delivery
     date selection lists*/
function removeSelectDefaults() {
  let emptyBoxes = document.getElementsByTagName("select");

  for (let i = 0; i < emptyBoxes.length; i++) {
    emptyBoxes[i].selectedIndex = -1;
  }
}

function resetForm() {
  document.getElementById("myForm").reset();
}

function validateEmail() {
  let athos = "";

  let emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter correct email format");
    document.myForm.email.focus();
    return false;
  }
  return true;
}

if (window.addEventListener) {
  window.addEventListener("load", removeSelectDefaults, false);
} else {
  window.attachEvent("onload", removeSelectDefaults);
}
