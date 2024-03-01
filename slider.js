const dotsWrapper = document.querySelector(".dots-wrapper");
const slideLine = document.querySelector(".slider-line");
//===========================================================

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1200",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1200",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1200",
    alt: "Group of Horses Running",
  },
];

const markup = images
  .map(
    (image) => `<img class="slider-img" src="${image.url}" alt="${image.alt}">`
  )
  .join(" ");

slideLine.insertAdjacentHTML("afterbegin", markup);

const markupDot = images.map((image) => `<div class="dot"></div>`).join(" ");
dotsWrapper.insertAdjacentHTML("afterbegin", markupDot);
//=============================================================
const sliderDots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");
const slideImages = document.querySelectorAll(".slider-img");
let sliderCount = 0;
let sliderWidth;

window.addEventListener("resize", showSlider);

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
  sliderDots.forEach((item) => item?.classList.remove("active"));

  sliderDots[index].classList.add("active");
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlider(sliderCount);
  });
});

setInterval;
setInterval(() => {
  nextSlide();
}, 4000);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showSlider();
thisSlider(sliderCount);
