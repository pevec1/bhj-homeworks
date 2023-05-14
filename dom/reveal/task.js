let divs = document.querySelectorAll(".reveal");

window.onscroll = () => {
  for (let div of divs) {
    const top1 = div.getBoundingClientRect().top;
    const bottom1 = div.getBoundingClientRect().bottom;
    if (top1 > window.innerHeight || bottom1 < 0) {
      console.log(false);
    } else {
      console.log(true);
      setTimeout(() => {
        div.classList.add("reveal_active");
      }, 800);
    }
  }
};
