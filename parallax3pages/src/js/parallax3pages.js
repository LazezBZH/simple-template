const ratio = 0.2;
// const ratio2 = 0.5;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleReveal1 = function (entries) {
  const reveal1 = document.querySelector(".reveal1");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      console.log("visible1");
      reveal1.classList.add("reveal-visible");

      observer.unobserve(entry.target);
    } else console.log("Invisible1");
  });
  console.log(handleReveal1);
};
const handleReveal2 = function (entries) {
  const reveal2 = document.querySelector(".reveal2");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      console.log("visible22");

      reveal2.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    } else console.log("Invisible22");
  });
  console.log(handleReveal2);
};
const handleReveal3 = function (entries) {
  const reveal3 = document.querySelector(".reveal3");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      console.log("visible333");

      reveal3.classList.add("reveal-visible");

      //   observer.unobserve(entry.target);
    } else console.log("Invisible333");
  });
  console.log(handleReveal3);
};

const handleAppear1 = function (entries) {
  const appear1 = document.querySelector(".appear1");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      console.log("appear");

      appear1.classList.add("appear-visible");

      //   observer.unobserve(entry.target);
    } else console.log("Nonappear");
  });
  console.log(handleAppear1);
};
const handleAppear2 = function (entries) {
  const appear2 = document.querySelector(".appear2");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      console.log("appear");

      appear2.classList.add("appear-visible");

      observer.unobserve(entry.target);
    } else console.log("Nonappear");
  });
  console.log(handleAppear2);
};
const handleAppear3 = function (entries) {
  const appear3 = document.querySelector(".appear3");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      console.log("appear");

      appear3.classList.add("appear-visible");

      observer.unobserve(entry.target);
    } else console.log("Nonappear");
  });
  console.log(handleAppear3);
};

const observer1 = new IntersectionObserver(handleReveal1, options);
const observer2 = new IntersectionObserver(handleReveal2, options);
const observer3 = new IntersectionObserver(handleReveal3, options);
const observer4 = new IntersectionObserver(handleAppear1, options);
const observer5 = new IntersectionObserver(handleAppear2, options);
const observer6 = new IntersectionObserver(handleAppear3, options);

var target1 = document.querySelector(".heading1");
observer1.observe(target1);
observer4.observe(target1);

var target2 = document.querySelector(".heading2");
observer2.observe(target2);
observer5.observe(target2);

var target3 = document.querySelector(".heading3");
observer3.observe(target3);
observer6.observe(target3);
