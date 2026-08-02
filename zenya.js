document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      
      // Toggle Hamburger Anim/State
      const spans = hamburger.querySelectorAll("span");
      spans.forEach(span => span.classList.toggle("open"));
    });
  }
});