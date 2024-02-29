const slideLine = document.querySelector(".slider-line"),
  slideImages = document.querySelectorAll(".slider-img"),
  prevButton = document.querySelector(".button-prev"),
  nextButton = document.querySelector(".button-next"),
  sliderDots = document.querySelectorAll(".dot");

let sliderCount = 0;
let sliderWidth;

window.addEventListener("resize", showSlider);
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function showSlider() {
  sliderWidth = document.querySelector(".slider").offsetWidth;
  slideLine.style.width = sliderWidth * slideImages.length + "px";
  slideImages.forEach((item) => (item.style.width = sliderWidth + "px"));
  rollSlider();
}

function nextSlide() {
  sliderCount++;
  if (sliderCount >= slideImages.length) sliderCount = 0;
  rollSlider();
  thisSlider(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = slideImages.length - 1;
  rollSlider();
  thisSlider(sliderCount);
}

function rollSlider() {
  slideLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlider(index) {
  sliderDots.forEach((item) => item.classList.remove("active"));
  sliderDots[index].classList.add("active");
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlider(sliderCount);
  });
});

// setInterval;
// setInterval(() => {
//   nextSlide();
// }, 3000);

showSlider();
