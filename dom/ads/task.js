setInterval(() => {
  const rotators = document.querySelectorAll(".rotator__case");
  let rand = Math.floor(Math.random() * 6);
  for (let i = 0; i < rotators.length; i++) {
    if (rotators[i].classList.contains("rotator__case_active") == true) {
      rotators[i].classList.remove("rotator__case_active");
    }
  }
  rotators[rand].classList.add("rotator__case_active");
}, 1000);
