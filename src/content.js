import './styles/global.css'
import Toast from './components/Toast'
import { setStatus, getStatus, prepareButtons } from './utils/helpers'
import { defaltUserData } from './utils/constants'

if (localStorage.getItem('NED_USERDATA') === null) {
  localStorage.setItem('NED_USERDATA', JSON.stringify(defaltUserData))
}

if (!getStatus()) {
  setStatus(0) // 0 - default, 1 - btn clicked, 2 - in progress
}

Toast.showWelcomeMessage()

const { hostname, pathname } = window.location
const pathnameLength = pathname.split('/').filter((e) => e !== '').length

if (hostname === 'krakenfiles.com') {
  if (pathnameLength === 3) {
    const btn = document.querySelector('#dl-form > button[type="submit"]')

    window.addEventListener('blur', () => {
      window.close()
    })

    requestAnimationFrame(() => {
      btn.click()
    })
  }
}

if (hostname === 'nuteczki.top') {
  if (pathnameLength === 2) {
    prepareButtons()
    new Toast({
      message: 'Pomyślnie dodano przyciski dla łatwego pobierania',
    })
  } else if (pathnameLength === 3) {
    const href = document.querySelector(
      'span.download-icon > a[target="_blank"]'
    ).href
    window.open(href)
    window.close()
  }
}
