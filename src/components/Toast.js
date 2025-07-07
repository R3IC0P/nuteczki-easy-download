import Logo from './Logo'

class Toast {
  #message
  #notification
  #timeout
  #progressBar
  #remainingTime
  #startTime

  constructor({ message = 'Nuteczki Easy Download', duration = 2500 } = {}) {
    this.#message = message
    this.#remainingTime = duration

    this.#create()
    this.#show()
  }

  #create() {
    this.#notification = document.createElement('div')
    this.#notification.className = 'ned ned-toast'
    this.#notification.innerHTML = /*html*/ `
        <div class="ned-toast__header">
          ${Logo({ size: '12px', simplifiedLevel: 1 })}
          <button class="ned-toast__close">
            <svg viewBox="0 0 460.775 460.775">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
            </svg>
          </button>
        </div>
        <div class="ned-toast__message">
          ${this.#message}
        </div>
        <div class="ned-toast__footer"></div>
        <div class="ned-toast__progress"></div>
      `

    let notificationStack = document.querySelector('.ned-toast-stack')
    if (!notificationStack) {
      notificationStack = document.createElement('div')
      notificationStack.className = 'ned-toast-stack'
      document.body.appendChild(notificationStack)
    }

    notificationStack.appendChild(this.#notification)

    this.#notification.addEventListener('mouseenter', () => this.#pause())
    this.#notification.addEventListener('mouseleave', () => this.#resume())
    this.#notification
      .querySelector('.ned-toast__close')
      .addEventListener('click', () => this.#hide())

    this.#notification.addEventListener('animationend', (event) => {
      if (event.animationName === 'slideOut') {
        this.#notification.remove()
      }
    })
  }

  #show() {
    requestAnimationFrame(() => {
      this.#notification.classList.add('ned-active')
    })
    this.#startTime = Date.now()
    this.#timeout = setTimeout(this.#hide, this.#remainingTime)
    this.#progressBar = this.#notification
      .querySelector('.ned-toast__progress')
      .animate([{ width: '100%' }, { width: '0%' }], {
        duration: this.#remainingTime,
      })
  }

  #hide = () => {
    this.#notification.classList.remove('ned-active')
    this.#notification.classList.add('ned-hide')
  }

  #pause() {
    clearTimeout(this.#timeout)
    const elapsed = Date.now() - this.#startTime
    // console.log(elapsed)
    this.#remainingTime -= elapsed
    this.#progressBar.pause()
  }

  #resume() {
    this.#startTime = Date.now()
    this.#timeout = setTimeout(this.#hide, this.#remainingTime)
    this.#progressBar.play()
  }

  static showWelcomeMessage() {
    const isFirstTime = localStorage.getItem('nedWelcomeShown') === null
    if (isFirstTime) {
      new Notification({
        message:
          'Witaj w Nuteczki Easy Download! Teraz możesz łatwo pobierać swoje ulubione utwory.',
        duration: 7000,
      })
      localStorage.setItem('nedWelcomeShown', 'true')
    }
  }

  static showDownloadStart(message) {
    new Notification({ message: `Pobieranie: ${message}` })
  }

  static showDownloadComplete() {
    new Notification({ message: 'Pobieranie zakończone!' })
  }
}

export default Toast
