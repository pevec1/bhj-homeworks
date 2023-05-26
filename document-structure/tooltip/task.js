let divs = document.querySelectorAll('.has-tooltip')
let elem = document.createElement('div')
let title = '',
  elem2
for (let div of divs) {
  div.addEventListener('focus', () => {
    div.addEventListener('click', e => {
      e.preventDefault()
      elem.classList.add('tooltip')
      elem.innerHTML = div.getAttribute('title')
      let w = window.getComputedStyle(div).width
      elem.style = 'left: 0; top: 0'
      div.parentNode.insertBefore(elem, div.nextSibling)
      elem.classList.add('tooltip_active')
      title = div.title
      elem2 = elem
      div.addEventListener('click', e => {
        e.preventDefault()
        if (title == div.title) {
          elem.classList.toggle('tooltip_active')
          console.log('tooltip remove')
        }
      })
    })
  })
}
