const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector(".overlay-texts");
const links = intro.querySelector(".look-up");
const loading = document.querySelector(".load-screen");
const body = document.querySelector("body");

// Event Listners
window.addEventListener("loadstart", () => {
  window.scroll({
    top: 3300,
    behavior: "smooth",
  });
});

window.addEventListener("load", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  loading.style.display = "none";
  body.style.overflowY = "scroll";
});

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3300,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
// Link Animation
const linkAnim = TweenMax.fromTo(links, 3, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  duration: 200,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 200,
  offset: 3100,
  triggerHook: 0,
})
  .setTween(linkAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);
