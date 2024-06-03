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

document.addEventListener("DOMContentLoaded", function () {
  const arcText = document.querySelector(".arc-text");
  const radius = arcText.getAttribute("data-arc");
  const chars = arcText.querySelectorAll("span");
  const angle = 360 / chars.length;

  chars.forEach((char, i) => {
    const rotate = angle * i;
    char.style.transform = `rotate(${rotate}deg) translate(${radius}px) rotate(-${rotate}deg)`;
  });
});
