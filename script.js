let btnText = document.getElementById("btn");

function gotot() {
  btnText.textContent = "...";
  setTimeout(() => {
    window.location.href = "Fil/p1.html";
  }, 2000);
}
function gotoe() {
  btnText.textContent = "...";
  setTimeout(() => {
    window.location.href = "Eng/a1.html";
  }, 2000);
}
let music = document.getElementById("music");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    btn.innerHTML = '<i class="fa-solid fa-pause" style="font-size:30px;"></i>';
  }
  else {
    music.pause()
    btn.innerHTML = '<i class="fa-solid fa-play"></i>'
  }
});
music.addEventListener("ended", function() {
  btn.innerHTML = '<i class="fa-solid fa-play" style="font-size:30px;"></i>';
});
