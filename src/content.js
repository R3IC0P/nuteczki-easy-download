import './styles/global.css'
import Toast from './components/Toast'
import { prepareButtons } from './utils/helpers'

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

if (hostname === 'm1.nuteczki.top') {
  if (pathnameLength === 2) {
    prepareButtons()
    new Toast({
      message: 'Dodano przyciski do szybkiego pobierania',
    })
  } else if (pathnameLength === 3) {
    const link = document.querySelector(
      'span.download-icon > a[target="_blank"]'
    ).href
    const encodedLink = new URLSearchParams(link).get('getmp3')
    const decodedLink = window.atob(encodedLink).split('|')[2]

    window.open(decodedLink, '_self')
  }
}
