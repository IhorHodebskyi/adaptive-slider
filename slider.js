const slideLine = document.querySelector(".slider-line"),
  slideImages = document.querySelectorAll(".slider-img"),
  prevButton = document.querySelector(".button-prev"),
  nextButton = document.querySelector(".button-next"),
  dots = document.querySelectorAll(".dot");

let position = 0,
  dotIndex = 0,
  sliderWidth = 0;
window.addEventListener("resize", showSlider());
//function

const showSlider = () => {
  sliderWidth = document.querySelector(".slider-line").offsetWidth;
  slideLine.style.width = sliderWidth * slideImages.length + "px";
  // console.log(sliderWidth);
  slideImages.forEach((item) => (item.style.width = sliderWidth + "px"));
// };
// showSlider();

// const nextSlide = () => {
//   if (position < (dots.length - 1) * 500) {
//     position += 500;
//     dotIndex++;
//   } else {
//     position = 0;
//     dotIndex = 0;
//   }
//   slideLine.style.left = -position + "px";
//   thisSlide(dotIndex);
// };

// const prevSlide = () => {
//   if (position > 0) {
//     position -= 500;
//     dotIndex--;
//   } else {
//     position = (dots.length - 1) * 500;
//     dotIndex = dots.length - 1;
//   }
//   slideLine.style.left = -position + "px";
//   thisSlide(dotIndex);
// };

// const thisSlide = (index) => {
//   for (let dot of dots) {
//     dot.classList.remove("active");
//   }
//   dots[index].classList.add("active");
// };

//event
// nextButton.addEventListener("click", nextSlide);
// prevButton.addEventListener("click", prevSlide);

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     position = index * 500;
//     slideLine.style.left = -position + "px";
//     dotIndex = index;
//     thisSlide(dotIndex);
//   });
// });

// setInterval
// setInterval(() => {
//   nextSlide();
// }, 3000);
