let books1 = document.querySelector(".book__control_font-size");
if (books1) {
  let books = document.querySelectorAll(".book");
  let sizes = document.querySelectorAll(".font-size");

  for (let link of sizes) {
    if (link.className == "font-size font-size_active") {
      link.setAttribute("data-size", "normal");
      link.classList.add("font-size_normal");
    }
    link.onclick = () => {
      let elem = Array.from(books);
      let i = 0;

      if (link.dataset.size === "small") {
        elem[i].className = "book";
        elem[i].classList.add("book_fs-small");
        link.classList.add("font-size_active");
        link.nextElementSibling.classList.remove("font-size_active");
        link.nextElementSibling.nextElementSibling.classList.remove(
          "font-size_active"
        );
      }
      if (link.dataset.size === "normal") {
        elem[i].className = "book";
        link.classList.add("font-size_active");
        link.nextElementSibling.classList.remove("font-size_active");
        link.previousElementSibling.classList.remove("font-size_active");
      }
      if (link.dataset.size === "big") {
        elem[i].className = "book";
        elem[i].classList.add("book_fs-big");
        link.classList.add("font-size_active");
        link.previousElementSibling.classList.remove("font-size_active");
        link.previousElementSibling.previousElementSibling.classList.remove(
          "font-size_active"
        );
      }
      i++;
      return false;
    };
  }
}
