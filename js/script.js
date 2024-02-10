
// Slider image
let slides = document.querySelectorAll(".carousel-slide");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 50000);

showSlide(currentIndex);

// Modal image
const zoomedImg = document.querySelector(".zoomed-image");

function showZoomedImage() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "flex";

  const zoomedImg = document.querySelector(".zoomed-image");
  const clickedImage = event.currentTarget;
  const source = clickedImage.getAttribute("data-src");

  zoomedImg.src = source;
}

function closeZoom() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}

const clickableImages = document.querySelectorAll(".clickable-image");

clickableImages.forEach(function (image) {
  image.addEventListener("click", showZoomedImage);
});



// Navbar
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("run");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {

  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("run");
  }
});
