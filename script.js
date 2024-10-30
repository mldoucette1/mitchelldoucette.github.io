// Display a message in the console
document.addEventListener("DOMContentLoaded", function() {
  console.log("Welcome to Mitchell Doucette's personal website!");
});

// Smooth scroll effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
