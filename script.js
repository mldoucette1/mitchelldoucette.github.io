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

document.addEventListener("DOMContentLoaded", function () {
  // Enable tap-to-flip for publication cards
  document.querySelectorAll(".pub-flip-card").forEach(function (card) {
    card.addEventListener("click", function () {
      this.querySelector(".pub-flip-inner").classList.toggle("flipped");
    });
  });

  // Enable tap-to-flip for expertise cards (if using same flip logic)
  document.querySelectorAll(".flip-card").forEach(function (card) {
    card.addEventListener("click", function () {
      this.querySelector(".flip-inner").classList.toggle("flipped");
    });
  });
});

// Back-to-Top button logic
const backBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

