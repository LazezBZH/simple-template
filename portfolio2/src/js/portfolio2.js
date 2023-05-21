gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;
document.querySelectorAll(".anchor").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 1,
    });
  });
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 },
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
  },
});

// reveal appear
const ratio2 = 0.2;

const options2 = {
  root: null,
  rootMargin: "0px",
  threshold: ratio2,
};
const handleReveal3 = function (entries) {
  const reveal3 = document.querySelector(".reveal3");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio2) {
      console.log("visible333");

      reveal3.classList.add("reveal-visible3");
    } else console.log("Invisible333");
  });
  console.log(handleReveal3);
};

const observer32 = new IntersectionObserver(handleReveal3, options2);

var target32 = document.querySelector(".heading3");
observer32.observe(target32);
var ages = [25, 32, 41, 28, 35, 29, 43, 40, 27, 19];

function init() {
  fetch("https://randomuser.me/api/?nat=fr")
    .then((response) => response.json())
    .then((data) => {
      var user = data.results[0];
      user.age = ages[Math.floor(Math.random() * ages.length)];
      console.log(user);
      renderFromUser(user);
    });
}

function renderFromUser(user) {
  document.querySelector(
    ".reveal1"
  ).innerHTML = `<img src=${user.picture.large}>`;
  document.querySelector(".appear11").innerHTML = `${user.name.first}`;
  document.querySelector(".appear12").innerHTML = `${user.name.last}`;
  document.querySelector(".appear13").innerHTML = `${user.age} ans`;
  document.querySelector(".appear14").innerHTML = `${user.location.city}`;
  document.querySelector(".appear15").innerHTML = `${user.location.country}`;
  document.querySelector(
    ".reveal3"
  ).innerHTML = `<div><img src=${user.picture.large}></div> <div class="contact">
                        <div><a href="mailto:${user.email}" class="button" target="_blank" id="email">Me contacter par mail</a></div>
                        <div><a href="tel:${user.cell}" class="button" target="_blank" id="phone">Me téléphoner</a></div>
                        
                        <div><a href =
    "https://www.facebook.com/" class="button" target="_blank" class="button" id="facebook">Facebook</a></div>
    <div><a href =
    "https://www.linkedin.com/" class="button" target="_blank" class="button" id="linkedin">LikedIn</a></div>
                    </div>`;
}

init();
