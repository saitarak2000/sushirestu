let image_container = document.getElementById("bg-container");
console.log(image_container);

function setbackground() {
  let array = [
    "url('https://res.cloudinary.com/dup0x6cae/image/upload/v1661257746/gallery-4_rajf7b.jpg')",

    "url('https://res.cloudinary.com/dup0x6cae/image/upload/v1661257674/restaurant-interior-1024x683_tooe5n.jpg')",
    "url('https://res.cloudinary.com/dup0x6cae/image/upload/v1661257619/c1920_photobypablomerchaacutenmontesonunsplash_gwbdrb.jpg')",
  ];

  const bg = Math.ceil(Math.random() * array.length);
  console.log(bg);
  image_container.style.backgroundImage = array[bg - 1];
}

setInterval(setbackground, 2000);

let hamburger = document.getElementById("hamburger");

let wrong = document.getElementById("wrong");

let options = document.getElementById("nav-items");

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  options.style.display = "flex";
  wrong.style.display = "flex";
});
wrong.addEventListener("click", function () {
  options.style.display = "none";
  wrong.style.display = "none";
  hamburger.style.display = "flex";
});

let navbar = document.getElementById("navbar");
let body = document.getElementById("body");

let navimage = document.getElementById("nav-image");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    navbar.style.backgroundColor = "#ffffff";
    navbar.classList.add("top");
    options.style.color = "black";
    hamburger.classList.remove("filter-green");
    navimage.setAttribute(
      "src",
      "https://res.cloudinary.com/dup0x6cae/image/upload/v1661260735/logo-black_mkxwaf.png"
    );
  } else {
    navbar.style.backgroundColor = "transparent";
    options.style.color = "#ffffff";
    hamburger.classList.add("filter-green");
    navbar.classList.remove("top");
    navimage.setAttribute(
      "src",
      "https://res.cloudinary.com/dup0x6cae/image/upload/v1661260604/logo_bgxnrc.png"
    );
  }
});
