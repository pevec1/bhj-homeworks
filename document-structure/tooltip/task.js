let divs = document.querySelectorAll('.has-tooltip')
let elem = document.createElement('div')

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
      console.log('tooltip active')
      let isAgain = true
      div.addEventListener('click', e => {
        e.preventDefault()
        if (isAgain) {
          elem.classList.remove('tooltip_active')
          console.log('tooltip remove')
          isAgain = false
        }
      })
    })
  })
}
