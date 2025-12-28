let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideDelay = 3000; // 3s duration

function showSlide(i) {
  slides.forEach((s, index) => s.classList.toggle("active", index === i));
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlideFunc() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

prev.addEventListener("click", () => {
  clearInterval(slideTimer);
  prevSlideFunc();
  slideTimer = setInterval(nextSlide, slideDelay);
});

next.addEventListener("click", () => {
  clearInterval(slideTimer);
  nextSlide();
  slideTimer = setInterval(nextSlide, slideDelay);
});

let slideTimer = setInterval(nextSlide, slideDelay);
showSlide(slideIndex);
