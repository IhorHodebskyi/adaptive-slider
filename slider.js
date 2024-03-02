const dotsWrapper = document.querySelector(".dots-wrapper");
const slideLine = document.querySelector(".slider-line");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");

const url = `https://pixabay.com/api/?q=cat&page=1&key=36811784-c13148b3b1c3296db8a3ae716&image_type=photo&orientation=horizontal&per_page=5`;

export default async function getAllImages() {
  try {
    const response = await fetch(url);
    const { hits } = await response.json();
    return hits;
  } catch (error) {
    console.error(error);
  }
}

async function addMarkupImg(hits) {
  const markupImg = await hits
    .map(
      ({ largeImageURL, tags }) => `<img src="${largeImageURL}" alt="${tags}">`
    )
    .join(" ");
  console.log(markupImg);
  slideLine.innerHTML = await markupImg;
}
async function addMarkupDots(hits) {
  const markupDot = await hits.map(() => `<div class="dot"></div>`).join(" ");
  console.log(markupDot);
  dotsWrapper.innerHTML = await markupDot;
}
async function render() {
  await getAllImages().then((hits) => {
    addMarkupImg(hits);
    addMarkupDots(hits);
  });
}
render();

const sliderDots = document.querySelectorAll(".dots-wrapper");
console.log(sliderDots.children);
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
console.log(sliderDots);
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

setInterval;
setInterval(() => {
  nextSlide();
}, 4000);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showSlider();
thisSlider(sliderCount);
