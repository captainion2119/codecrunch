// Handle link clicks
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".link");
  links.forEach(function (link) {
    link.addEventListener("click", handleLinkClick);
  });
});

function handleLinkClick(event) {
  event.preventDefault(); // Prevent default link behavior

  // Show the loader page
  showLoaderPage();

  // Get the target URL from the clicked link
  let targetURL = event.currentTarget.getAttribute("href");

  // Wait for a certain period (e.g., 5 seconds) before navigating to the target page
  setTimeout(function () {
    window.location.href = targetURL; // Navigate to the target page
  }, 5000);
}

function showLoaderPage() {
  // Redirect to the loader page (loader.html)
  window.location.href = "loadbar.html";
}
