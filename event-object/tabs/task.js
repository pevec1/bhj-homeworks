let tabs1 = document.querySelector('.tabs')
if (tabs1) {
  let tabs = document.querySelectorAll('.tab')
  let tabsContent = document.querySelectorAll('.tab__content')

  let elem = Array.from(tabs)
  let elemtab = Array.from(tabsContent)
  for (let i = 0; i < tabs.length; i++) {
    elem[i].addEventListener('click', function (e) {
      for (let j = 0; j < tabs.length; j++) {
        if (elem[j].className == 'tab tab_active') {
          elem[j].className = 'tab'
          elemtab[j].className = 'tab__content'
        }
      }
      if (elem[i].className == 'tab') {
        elem[i].className += ' tab_active'
        elemtab[i].className += ' tab__content_active'
      }
    })
  }
}
