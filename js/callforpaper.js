window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.opacity = 1;

  setTimeout(function () {
    preloader.style.opacity = 0;
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // Adjust the delay as needed
  }, 2000); // Adjust the delay as needed
});
