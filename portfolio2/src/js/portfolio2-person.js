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
                        <a href="mailto:${user.email}" class="button" target="_blank" id="email">Me contacter par mail</a>
                        <a href="tel:${user.cell}" class="button" target="_blank" id="phone">Me téléphoner</a>
                        
                        <a href =
    "https://www.facebook.com/" class="button" target="_blank" class="button" id="facebook">Facebook</a>
    <a href =
    "https://www.linkedin.com/" class="button" target="_blank" class="button" id="linkedin">LikedIn</a>
                    </div>`;
}

init();
