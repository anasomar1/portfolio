const navcontainer = document.querySelector(".nav-container");
const navbar = document.querySelector("nav");
window.onscroll = () => {
  if (window.scrollY > 900) {
    navcontainer.classList.add("nav-active");
  } else {
    navcontainer.classList.remove("nav-active");
  }
};

const hamburger = document.querySelector(".toggle-button");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
// --------Animation-----------

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".hero .hero-content", {
  opacity: 0,
  x: -50,
  duration: 1,
  ease: Power2.out,
}).from(
  ".hero img",
  {
    opacity: 0,
    x: 50,
    duration: 1,
  },
  "-=1"
);

gsap.from(".about .about-content", {
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
  },
  x: -50,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top center",
  },
  x: -50,
  opacity: 0,
  stagger: 0.3,
  duration: 2,
  ease: "power2.out",
});
gsap.from(".social", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top bottom",
  },
  x: 50,
  opacity: 0,
  stagger: 0.3,
  duration: 2,
  ease: "power2.out",
});

gsap.from(".project", {
  scrollTrigger: {
    trigger: ".project",
    start: "top bottom",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  ease: Power2.easeOut,
});

const texts = [
  "Lets work together",
  "Get in touch",
  "Waiting to hear from you",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 175);
})();
