const buttons = document.querySelectorAll("[data-carousel-button]");
let slideIndex = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    slideIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (slideIndex < 0) slideIndex = slides.children.length - 1;
    if (slideIndex >= slides.children.length) slideIndex = 0;

    slides.children[slideIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

function showSlides() {
  const slides = document.querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");

  // Hide the current slide
  delete activeSlide.dataset.active;

  // Increment slide index
  slideIndex++;

  // If slide index is greater than total slides, reset to first slide
  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }

  // Display the current slide and hide the rest
  slides.children[slideIndex].dataset.active = true;

  // Change slide every 2 seconds (2000 milliseconds)
  setTimeout(showSlides, 7000);
}

// Call showSlides function
showSlides();
