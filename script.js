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

gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top bottom",
  },
  x: -50,
  opacity: 0,
  stagger: 0.3,
  duration: 2,
  ease: "power2.out",
});

gsap.from(".project", {
  scrollTrigger: {
    trigger: ".project",
    start: "top center",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  ease: Power2.easeOut,
});
