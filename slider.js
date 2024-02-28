const slideLine = document.querySelector(".slider-line"),
  prevButton = document.querySelector(".button-prev"),
  nextButton = document.querySelector(".button-next"),
  dots = document.querySelectorAll(".dot");

let position = 0,
  dotIndex = 0;

//function

const nextSlide = () => {
  if (position < (dots.length - 1) * 400) {
    position += 400;
    dotIndex++;
  } else {
    position = 0;
    dotIndex = 0;
  }
  slideLine.style.left = -position + "px";
  thisSlide(dotIndex);
};

const prevSlide = () => {
  if (position > 0) {
    position -= 400;
    dotIndex--;
  } else {
    position = (dots.length - 1) * 400;
    dotIndex = dots.length - 1;
  }
  slideLine.style.left = -position + "px";
  thisSlide(dotIndex);
};

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
};

//event
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = index * 400;
    slideLine.style.left = -position + "px";
    dotIndex = index;
    thisSlide(dotIndex);
  });
});

// setInterval
setInterval(() => {
  nextSlide();
}, 3000);
