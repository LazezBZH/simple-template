const sidenav = document.getElementById("mySidenav_mobil");
const openBtn = document.getElementById("openBtn_mobil");
const closeBtn = document.getElementById("closeBtn_mobil");
const closeToo = document.querySelector(".closeToo_mobil");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
closeToo.onclick = closeNav;

function openNav() {
  sidenav.classList.add("activeS");
}

function closeNav() {
  sidenav.classList.remove("activeS");
}
console.log("T où?!");
