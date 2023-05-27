let divs = document.querySelectorAll('.has-tooltip')
let elem = document.createElement('div')
let title = '',
  elemActive = null
for (let div of divs) {
  //div.addEventListener('focus', () => {
    div.addEventListener('click', e => {
      e.preventDefault()

      if(elemActive){
        elemActive.classList.remove('tooltip_active');
        elemActive = null;
      }

      elem.classList.add('tooltip')
      elem.innerHTML = div.getAttribute('title')
      let w = window.getComputedStyle(div).width
      elem.style = 'left: 0; top: 0'
      div.parentNode.insertBefore(elem, div.nextSibling)
      elem.classList.add('tooltip_active')
      console.log('tooltip active')
      title = elem.textContent
      elemActive = elem    
    })
} 
   document.addEventListener('click', e => {
        e.preventDefault()
        console.log(e.target.classList.contains('has-tooltip'))
        if (elemActive&&!e.target.classList.contains('has-tooltip')) {
          elemActive.classList.remove('tooltip_active')
          elemActive = null
          console.log('tooltip remove')
        }
      })


