const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
function showPopup(grade, male, female,total, classTeacher,theyear,update) {
  document.getElementById("level").innerText = grade;
  document.getElementById("Male").innerText = male;
  document.getElementById("Female").innerText = female;
  document.getElementById("total").innerText = total;
  document.getElementById("classTeacher").innerText = classTeacher;
  document.getElementById("theyear").innerText = theyear;
  document.getElementById("update").innerText = update;
  document.getElementById("dateTime").innerText = getCurrentDateTime();
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

function getCurrentDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return now.toLocaleDateString(undefined, options);
}
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})
document.querySelectorAll(".link1","link2","link3","link4").forEach(n => n.
   addEventListener("click", () => {
    hamburger.classList.remove("active")
    navbar.classList.remove("active")
    

   }))

   document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("./Audio/success.mp3"); // Replace with the path to your sound file

    const links = document.querySelectorAll("a[href]");

    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        audio.play();
      });
    });
  });


