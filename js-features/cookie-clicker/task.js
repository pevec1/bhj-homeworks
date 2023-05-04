  window.count = 0;
const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
function crazyCookie() {
  count++;
  clicker.textContent = count;
  if (count % 2 == 0) {
    image.width = 250;
    image.height = 150;
  } else {
    image.width = 200;
    image.height = 100;
  }
}
image.onclick = crazyCookie;
