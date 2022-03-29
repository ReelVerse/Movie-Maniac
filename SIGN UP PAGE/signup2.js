let first = document.getElementById("form3Example1m")
let last = document.getElementById("form3Example1n")
let mother = document.getElementById("form3Example1m1")
let father = document.getElementById("form3Example1n1")
let email = document.getElementById("form3Example8")
let pwd = document.getElementById("form3Example9")
let cpwd = document.getElementById("form3Example90")
let male = document.getElementById("maleGender")
let female = document.getElementById("femaleGender")
let other = document.getElementById("otherGender")


function erase() {
  first.value = null;
  last.value = null;
  mother.value = null;
  father.value = null;
  email.value = null;
  pwd.value = null;
  cpwd.value = null;
  other.value = null;


}


// Things I wish to be added
// when clicking reset button all are getting null except the Gender option
// Can we add logo  of each community (fb,google,discord) in each button
