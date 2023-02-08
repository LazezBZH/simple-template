const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const closeToo = document.querySelector(".closeToo");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
closeToo.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}
