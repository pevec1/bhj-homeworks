card = document.querySelector('.card')
if (card) {
  list = document.querySelectorAll('.dropdown__item')
  ul = document.querySelector('.dropdown__list')
  value = document.querySelector('.dropdown__value')
  alink = document.querySelectorAll('.dropdown__link')

  value.addEventListener('click', function (e) {
    ul.classList.toggle('dropdown__list_active')
  })
  for (let link of alink) {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      ul.classList.toggle('dropdown__list_active')
      value.textContent = link.textContent
    })
  }
}
