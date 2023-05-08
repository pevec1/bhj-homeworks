let elems = document.querySelectorAll('.slider__item')
let prev_link = document.querySelector('.slider__arrow_prev')
let next_link = document.querySelector('.slider__arrow_next')

let elem = Array.from(elems)
let i = 0
prev_link.onclick = function () {
  elem[i].className = 'slider__item'
  i = i - 1
  if (i < 0) {
    i = elems.length - 1
  }
  elem[i].className = 'slider__item slider__item_active'
  elem[i - 1].className = 'slider__item'
}
next_link.onclick = function () {
  elem[i].className = 'slider__item'
  i = i + 1
  if (i >= elems.length) {
    i = 0
  }
  elem[i].className = 'slider__item slider__item_active'
  elem[i + 1].className = 'slider__item'
}
