elems = document.querySelectorAll(".menu__link")
for (let index = 0; index <= elems.length; index++) {
  getMenu = (index) => document.getElementsByClassName(`menu__link`);
  getMenu(index).onclick = function menu() {
  }
}