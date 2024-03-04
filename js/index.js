// var currentImageIndex = 0;
// var images = document.querySelectorAll(".slider img");
// var marksContainer = document.querySelector(".slider__marks");
// var intervalId;

// function showImage(index) {
//   if (index < 0) {
//     index = images.length - 1;
//   } else if (index >= images.length) {
//     index = 0;
//   }

//   for (var i = 0; i < images.length; i++) {
//     images[i].style.display = "none";
//   }

//   images[index].style.display = "block";
//   currentImageIndex = index;

//   // Update active mark
//   var marks = marksContainer.querySelectorAll("span");
//   for (var j = 0; j < marks.length; j++) {
//     marks[j].classList.remove("active");
//   }
//   marks[index].classList.add("active");
// }

// function prevImage() {
//   showImage(currentImageIndex - 1);
// }

// function nextImage() {
//   showImage(currentImageIndex + 1);
// }

// function startSlideshow() {
//   intervalId = setInterval(nextImage, 5000);
// }

// function stopSlideshow() {
//   clearInterval(intervalId);
// }

// // Create slide marks
// for (var k = 0; k < images.length; k++) {
//   var mark = document.createElement("span");
//   mark.addEventListener("click", function () {
//     var index = parseInt(this.getAttribute("data-index"));
//     stopSlideshow();
//     showImage(index);
//     startSlideshow();
//   });
//   mark.setAttribute("data-index", k);
//   marksContainer.appendChild(mark);
// }

// showImage(currentImageIndex);
// startSlideshow();

// //time-clock
// // Set the countdown date (replace with your desired end date)
// const countdownDate = new Date("2024-03-14T00:00:00Z");

// // Update the countdown every second
// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const now = new Date().getTime();
//   const distance = countdownDate - now;

//   // Calculate days, hours, minutes, and seconds
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Update the HTML elements with the new values
//   document.getElementById("days").textContent = days;
//   document.getElementById("hours").textContent = hours;
//   document.getElementById("minutes").textContent = minutes;
//   document.getElementById("seconds").textContent = seconds;
// }
