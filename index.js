const dotsWrapper = document.querySelector(".dots-wrapper");
const slideLine = document.querySelector(".slider-line");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");
let sliderDots = document.querySelectorAll(".dot");
let slideImages = document.querySelectorAll("img");

let sliderCount = 0;
let sliderWidth;
//==============API======================
const url = `https://pixabay.com/api/?q=cat&page=1&key=36811784-c13148b3b1c3296db8a3ae716&image_type=photo&orientation=horizontal&per_page=5`;

const getAllImages = async () => {
  try {
    const response = await fetch(url);
    const { hits } = await response.json();
    return hits;
  } catch (error) {
    console.error(error);
  }
};
//==============Render=============================
function addMarkupImg(hits) {
  const markupImg = hits
    .map(
      ({ largeImageURL, tags }) => `<img src="${largeImageURL}" alt="${tags}">`
    )
    .join(" ");
  slideLine.innerHTML = "";
  slideLine.innerHTML = markupImg;
  slideImages = document.querySelectorAll("img");
}

function addMarkupDots(hits) {
  const markupDot = hits.map((hit) => `<div class="dot"></div>`).join(" ");
  dotsWrapper.innerHTML = "";
  dotsWrapper.innerHTML = markupDot;
  sliderDots = document.querySelectorAll(".dot");
  thisSlider(sliderCount);
  rooSliderByDot(sliderDots);
}

function render() {
  getAllImages().then((hits) => {
    addMarkupImg(hits);
    addMarkupDots(hits);
  });
}

render();
//===========================================
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
  sliderDots.forEach((item) => item.classList.remove("active"));
  sliderDots[index].classList.add("active");
}
function rooSliderByDot(event) {
  event.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      sliderCount = index;
      rollSlider();
      thisSlider(sliderCount);
    });
  });
}
rooSliderByDot(sliderDots);

setInterval;
setInterval(() => {
  nextSlide();
}, 4000);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showSlider();
thisSlider(sliderCount);
