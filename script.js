document.querySelector("#box #box").addEventListener("mouseover", function () {
  gsap.to("#box", {
    rotate: "10deg",
  });
  gsap.to("#box>#box", {
    rotate: "-20deg",
  });
});
document.querySelector("#box #box").addEventListener("mouseout", function () {
  gsap.to("#box", {
    rotate: "-10deg",
  });
  gsap.to("#box>#box", {
    rotate: "10deg",
  });
});

gsap.to("#main2 #band", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 70%",
    end: "80% 60%",
    scrub: 2,
  },
  x: "-33%",
});
