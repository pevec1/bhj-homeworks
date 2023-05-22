let divs = document.querySelectorAll('.has-tooltip')
let elem = document.createElement('div')

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
      let w = window.getComputedStyle(div).width
      elem.style = 'display: inline-block; position: absolute; margin-left: -100px; margin-top: -30px'
      div.parentNode.insertBefore(elem, div.nextSibling)
      elem.classList.add('tooltip_active')
    })
  }
}
