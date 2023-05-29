let divs = document.querySelectorAll('.has-tooltip')
let elem = document.createElement('div')
let title = '',
  elemActive = null
for (let div of divs) {
  //div.addEventListener('focus', () => {
    let pos = div.getBoundingClientRect()
    div.addEventListener('click', e => {
      e.preventDefault()
      let w = div.getBoundingClientRect()
      console.log(w.bottom, w.left)

      if(elemActive){
        elemActive.classList.remove('tooltip_active');
        elemActive = null;
        console.log('tooltip remove1')
      }

      elem.classList.add('tooltip')
      elem.innerHTML = div.getAttribute('title')
      elem.style.cssText = "position:fixed; "
      elem.style.left = w.left+"px"
      elem.style.top = w.bottom+"px"
      div.parentNode.insertBefore(elem, div.nextSibling)
      elem.classList.add('tooltip_active')
      console.log('tooltip active')
      title = elem.textContent
      elemActive = elem   
    div.addEventListener('click', e => {
      e.preventDefault()
      console.log(title, elemActive)
      if (div.title === elem.textContent){
        elemActive.classList.toggle('tooltip_active')
        console.log('tooltip toggle')

      }
    })
    })
//  })
    div.addEventListener('click', e => {
      e.preventDefault()
      console.log(div.title, elem)
      if (div.title !== elem.textContent){
        elem.textContent = div.title

        elem.classList.add('tooltip_active')
        console.log('tooltip toggle add2')

      }
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
      document.addEventListener('scroll', (e) => {
      if (elemActive&&e.timeStamp> 100) {
        elemActive.classList.remove('tooltip_active')
        elemActive = null
      }
    })

