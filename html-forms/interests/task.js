const isInterest = document.querySelectorAll('.interest')
const inputs = document.querySelectorAll('.interest__check')

function isCheckbox (element) {
  return (
    element instanceof HTMLInputElement &&
    element.getAttribute('type') == 'checkbox'
  )
}

let elem = Array.from(inputs)
let result = false
for (let elem = 0; elem < inputs.length; elem++) {
  if (isCheckbox(inputs[elem])) {
    if (inputs[elem].classList.contains('interest__check')) {
      if (inputs[elem].nextSibling.textContent.trim() == 'Еда') {
        const food = inputs[elem]
        const underFood1 = inputs[elem + 1]
        const underFood2 = inputs[elem + 2]

        food.addEventListener('change', function (e) {
          if (e.target.checked) {
            underFood1.checked = true
            underFood2.checked = true
          } else {
            underFood1.checked = false
            underFood2.checked = false
          }
        })
        const animals = inputs[elem + 3]
        const cats = inputs[elem + 4]
        const dogs = inputs[elem + 5]

        animals.addEventListener('change', function (e) {
          if (e.target.checked) {
            cats.checked = true
            dogs.checked = true
          } else {
            cats.checked = false
            dogs.checked = false
          }
        })
      }
    }
  }
}
