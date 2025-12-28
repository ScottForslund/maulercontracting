// =====================================================
// Mauler Contracting LLC - Image Collage Script
// =====================================================

let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const delay = 3000; // 3 seconds
let slideTimer;

// Show a specific slide
function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

// Next/Previous slide controls
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlideFunc() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Manual control buttons
next.addEventListener("click", () => {
  clearInterval(slideTimer);
  nextSlide();
  slideTimer = setInterval(nextSlide, delay);
});
prev.addEventListener("click", () => {
  clearInterval(slideTimer);
  prevSlideFunc();
  slideTimer = setInterval(nextSlide, delay);
});

// Auto rotation
slideTimer = setInterval(nextSlide, delay);

// Initialize
showSlide(slideIndex);
