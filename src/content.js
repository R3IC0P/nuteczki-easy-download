import './styles/global.css'
import Toast from './components/Toast'
import { setStatus, getStatus, prepareButtons } from './utils/helpers'
import { defaltUserData } from './utils/constants'

// localsotrage init

if (localStorage.getItem('NED_USERDATA') === null) {
  localStorage.setItem('NED_USERDATA', JSON.stringify(defaltUserData))
}

if (!getStatus()) {
  setStatus(0) // 0 - default, 1 - in progress
}

Toast.showWelcomeMessage()

// base variables

const { hostname, pathname } = window.location
const pathnameLength = pathname.split('/').filter((e) => e !== '').length

if (hostname === 'krakenfiles.com') {
  if (pathnameLength === 3 && getStatus() === 1) {
    const btn = document.querySelector('#dl-form > button[type="submit"]')

    window.addEventListener('blur', () => {
      setStatus(0)
      window.close()
    })

    requestAnimationFrame(() => {
      btn.click()
    })
  }
}

if (hostname === 'm1.nuteczki.top') {
  if (pathnameLength === 2) {
    prepareButtons()
    new Toast({
      message: 'Pomyślnie dodano przyciski dla łatwego pobierania',
    })
  } else if (pathnameLength === 3) {
    const href = document.querySelector(
      'span.download-icon > a[target="_blank"]'
    ).href

    if (getStatus() === 1) {
      window.open(href)
      setTimeout(() => window.close(), 500)
    }
  }
}
