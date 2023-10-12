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


  document.addEventListener("DOMContentLoaded", function () {
    const downloadLinks = document.querySelectorAll(".download-link");
    const downloadPopup = document.getElementById("downloadPopup");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const filenameText = document.getElementById("filename");

    downloadLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const fileUrl = this.getAttribute("href");
            const fileName = this.getAttribute("data-filename");

            // Show the popup
            downloadPopup.style.display = "block";
            filenameText.innerText = fileName; // Set the filename in the popup

            // Simulate a file download (replace with actual download logic)
            const totalFileSize = 1024 * 1024; // Total file size in bytes
            let downloadedFileSize = 0; // Initially, no data downloaded

            const downloadInterval = setInterval(function () {
                downloadedFileSize += 1024; // Simulate downloading 1KB of data

                // Update the progress bar and text
                const progressPercentage = (downloadedFileSize / totalFileSize) * 100;
                progressBar.style.width = progressPercentage + "%";
                progressText.innerText = progressPercentage.toFixed(1) + "%";

                if (downloadedFileSize >= totalFileSize) {
                    clearInterval(downloadInterval);
                    progressText.innerText = "100%";

                    // Initiate the download (replace with your file path)
                    const anchor = document.createElement("a");
                    anchor.href = fileUrl;
                    anchor.download = fileName; // Set the download file name
                    anchor.style.display = "none";
                    document.body.appendChild(anchor);
                    anchor.click();
                    document.body.removeChild(anchor);

                    // Hide the popup after a delay (e.g., 2 seconds)
                    setTimeout(function () {
                        downloadPopup.style.display = "none";
                    }, 200);
                }
            }, 1); // Simulate progress update every 0.5 seconds
        });
    });
});

