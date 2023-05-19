class Chat {
  constructor () {
    this.messages = document.querySelector('.chat-widget__messages')
    this.input = document.getElementById('chat-widget__input')
    this.time = new Date()
    this.openChat()
  }
  openChat () {
    const chat = document.querySelector('.chat-widget')
    chat.onclick = e => {
      chat.classList.add('chat-widget_active')
    }

    let words = ''
    this.input.addEventListener('input', e => {
      //console.log(e.keyCode)
      words = this.input.value
      //console.log('1=' + words)
    })
    this.input.addEventListener('keyup', e => {
      //console.log(e.key)
      if (e.key === 'Enter' && words != '') {
        ///console.log('enter')
        this.addMessageClient(words)
        this.input.value = ''
        this.addMessageRobot()
      }
    })
  }
  addMessageClient (words) {
    this.messages.innerHTML += `
            <div class="message message_client">
              <div class="message__time">${this.time.getHours()}:${this.time.getMinutes()}</div>
              <div class="message__text">
                ${words}
              </div>
            </div>
          `
  }
  addMessageRobot () {
    let robot = [
      { text: 'Кто тут?' },
      { text: 'Где ваша совесть?' },
      { text: 'К сожалению, все операторы заняты. Не пишите нам больше.' },
      { text: 'Добрый день! До свидания!' },
      { text: 'Мы ничего не будем вам продавать!' },
      {
        text: 'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!'
      }
    ]

    let rand = Math.floor(Math.random() * robot.length)
    console.log(robot.length)
    this.messages.innerHTML += `
            <div class="message">
              <div class="message__time">${this.time.getHours()}:${this.time.getMinutes()}</div>
              <div class="message__text">
                ${robot[rand].text}
              </div>
            </div>
          `
  }
}

let windowChat = new Chat()
