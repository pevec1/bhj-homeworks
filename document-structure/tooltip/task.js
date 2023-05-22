let divs = document.querySelectorAll('.has-tooltip')
let elem = document.createElement('div')

for (let div of divs) {
}
let elems = document.querySelectorAll('.tooltip')
for (elem of elems) {
  if (elem.classList.contains('tooltip_active')) {
    elem.classList.remove('tooltip_active')
  }
}
for (let div of divs) {
  div.onfocus = () => {
    div.addEventListener('click', e => {
      e.preventDefault()
      elem.classList.add('tooltip')
      elem.innerHTML = div.getAttribute('title')
      elem.style = 'left: 0; top: 0'
      div.parentNode.insertBefore(elem, div.nextSibling)
      div.nextElementSibling.classList.add('tooltip_active')
    })
  }
}
