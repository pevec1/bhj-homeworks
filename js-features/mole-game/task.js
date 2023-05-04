const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
window.counter = 0;
window.counterLoose = 0;
function clear() {
  counter = 0;
  counterLoose = 0;
  dead.textContent = counter;
  lost.textContent = counterLoose;
}
for (let index = 1; index <= 9; index++) {
  getHole = (index) => document.getElementById(`hole${index}`);
  //console.log(getHole());
  getHole(index).onclick = function mole() {
    if (getHole(index).className.includes("hole_has-mole")) {
      counter++;
      dead.textContent = counter;
    } else {
      counterLoose++;
      lost.textContent = counterLoose;
    }
    if (counter >= 10) {
      alert("You Winner!!!");
      clear();
    }
    if (counterLoose >= 5) {
      alert("You looser(((");
      clear();
    }
  };
}
