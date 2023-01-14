const menu = document.querySelector(".nav-responsiv");
const moonTerang = document.querySelector(".moon-terang");
const whiteText = document.querySelectorAll(".whiteText");
const moonGelap = document.querySelector(".moon-gelap");
const body = document.body;

function munculMenu() {
  menu.style.bottom = "0";
}
function tutupMenu() {
  menu.style.bottom = "-100vh";
}
function fModeMalam() {
  body.classList.toggle("blue-night");
  moonTerang.classList.toggle("hide");
  moonGelap.classList.toggle("muncul");
  for (let i = 0; i < whiteText.length; i++) {
    whiteText[i].classList.remove("clr-black");
    whiteText[i].classList.toggle("white-night");
  }
}

moonTerang.addEventListener("click", fModeMalam);
moonGelap.addEventListener("click", fModeMalam);
