const timer = function () {
  const output = document.getElementById("timer");
  if (output.textContent > 0) {
    output.textContent -= 1;
  } else {
    clearInterval(interval);
    alert("Вы победили в конкурсе!");
  }
};

let interval = setInterval(
  timer,
  1000
);
 