card = document.querySelector('.card')
if (card) {
  list = document.querySelectorAll('.dropdown__item')
  ul = document.querySelector('.dropdown__list')
  value = document.querySelector('.dropdown__value')
  alink = document.querySelectorAll('.dropdown__link')

  value.addEventListener('click', function (e) {
    if (ul.className == 'dropdown__list') {
      ul.className += ' dropdown__list_active'
    }
  })
  for (let link of alink) {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      if (ul.className == 'dropdown__list dropdown__list_active') {
        ul.className = 'dropdown__list'
        value.textContent = link.textContent
      }
    })
  }
}
