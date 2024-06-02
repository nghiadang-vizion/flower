onload = () => {
  document.body.classList.remove("container");
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", myFunction);

function myFunction() {
  const music = document.querySelector(".music");
  music.play();

  const animateBackGround = document.querySelector(".animate_container");
  animateBackGround.classList.toggle("appear");

  const lyrics = document.querySelector(".lyrics");
  lyrics.style.display = "block";

  var svg = document.querySelectorAll(".draw");
  svg.forEach((i) => i.classList.toggle("reverse"));
}
