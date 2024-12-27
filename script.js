const images = document.querySelectorAll(".carousel-container img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Show the first image initially
images[currentIndex].classList.add("active");

// Function to update the displayed image
function updateCarousel(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// Event listeners for buttons
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel(currentIndex);
});
