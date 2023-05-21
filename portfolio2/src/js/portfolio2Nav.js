const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
// const closeToo = document.querySelector(".closeToo");

const links = document.querySelectorAll("header a");
const toggle = (e) => {
  links.forEach((link) => {
    link.classList.remove("activeL");
  });
  const element = e.target;
  element.classList.add("activeL");
};

links.forEach((link) => {
  link.addEventListener("click", toggle);
});

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
// closeToo.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

// observers
const ratio = 0.2;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const toggleLinks1 = function (entries) {
  const link1 = document.querySelector("#link-1");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("activeL");
      });
      link1.classList.add("activeL");
    }
  });
};
const toggleLinks2 = function (entries) {
  const link2 = document.querySelector("#link-2");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("activeL");
      });
      link2.classList.add("activeL");
    }
  });
};
const toggleLinks3 = function (entries) {
  const link3 = document.querySelector("#link-3");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("activeL");
      });
      link3.classList.add("activeL");
    }
  });
};
const toggleLinks4 = function (entries) {
  const link4 = document.querySelector("#link-4");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("activeL");
      });
      link4.classList.add("activeL");
    }
  });
};
const toggleLinks5 = function (entries) {
  const link5 = document.querySelector("#link-5");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("activeL");
      });
      link5.classList.add("activeL");
    }
  });
};
const toggleLinks6 = function (entries) {
  const link6 = document.querySelector("#link-6");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("activeL");
      });
      link6.classList.add("activeL");
    }
  });
};

const observer1 = new IntersectionObserver(toggleLinks1, options);
const observer2 = new IntersectionObserver(toggleLinks2, options);
const observer3 = new IntersectionObserver(toggleLinks3, options);
const observer4 = new IntersectionObserver(toggleLinks4, options);
const observer5 = new IntersectionObserver(toggleLinks5, options);
const observer6 = new IntersectionObserver(toggleLinks6, options);

let target1 = document.querySelector("#home");
observer1.observe(target1);
let target2 = document.querySelector("#panel-1");
observer2.observe(target2);
let target3 = document.querySelector("#panel-2");
observer3.observe(target3);
let target4 = document.querySelector("#panel-3");
observer4.observe(target4);
let target5 = document.querySelector("#panel-4");
observer5.observe(target5);
let target6 = document.querySelector("#panel-5");
observer6.observe(target6);
