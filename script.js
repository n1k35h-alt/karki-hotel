// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});


// Navbar scroll effect (glass + shrink feel)
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.95)";
    nav.style.borderBottom = "1px solid gold";
    nav.style.padding = "15px 60px";
  } else {
    nav.style.background = "rgba(0,0,0,0.6)";
    nav.style.padding = "20px 60px";
  }
});


// Scroll reveal animation (premium fade-up effect)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".card, h2, .about, .hero-text").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});