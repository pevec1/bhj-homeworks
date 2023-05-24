class Todo {
  constructor () {
    this.div = document.querySelector('.tasks__list')
    this.input = document.querySelector('.tasks__input')
    this.add = document.querySelector('.tasks__add')
    this.tasks()
  }
  tasks() {
    let words = ''
    this.input.addEventListener('input', e => {
      words = this.input.value
    })
    this.add.addEventListener('click', e => {
      e.preventDefault()
      let elem = document.createElement('div')
      if (words !== '') {
        elem.classList.add('task')
        elem.innerHTML += `<div class="task__title">
      ${words}
    </div>
    <a href="#" class="task__remove">&times;</a>`
        this.div.parentNode.insertBefore(elem, this.div.nextSibling)
      }
      elem.addEventListener('click', e => {
        //e.preventDefault()
        //console.log(e.target)
        elem.remove()
      })
    })
  }
}

let todo = new Todo()