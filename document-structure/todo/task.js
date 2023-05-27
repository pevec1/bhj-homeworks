class Todo {
  constructor () {
    this.div = document.querySelector('.tasks__list')
    this.input = document.querySelector('.tasks__input')
    this.add = document.querySelector('.tasks__add')
    this.tasks()
  }
  tasks() {
    this.add.addEventListener('click', e => {
      e.preventDefault()
      let elem = document.createElement('div')
      if (this.input.value.trim() !== '') {
        elem.classList.add('task')
        elem.innerHTML += `<div class="task__title">
      ${this.input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>`
        this.div.parentNode.insertBefore(elem, this.div.nextSibling)
        this.input.value = ''
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