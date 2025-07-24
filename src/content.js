import './styles/global.css'
import Toast from './components/Toast'
import { getInProgress, prepareButtons, setInProgress } from './utils/helpers'

Toast.showWelcomeMessage()

const { hostname, pathname } = window.location
const pathnameLength = pathname.split('/').filter((e) => e !== '').length

if (hostname === 'krakenfiles.com') {
  if (pathnameLength === 3) {
    const { success, isInProgress } = await getInProgress()

    if (success && isInProgress) {
      const btn = document.querySelector('#dl-form > button[type="submit"]')

      window.addEventListener('blur', async () => {
        const { success } = await setInProgress(false)
        if (success) window.close()
      })

      requestAnimationFrame(() => {
        btn.click()
      })
    }
  }
}

if (hostname === 'm1.nuteczki.top') {
  if (pathnameLength === 2) {
    prepareButtons()
    new Toast({
      message: 'Dodano przyciski do szybkiego pobierania',
    })
  } else if (pathnameLength === 3) {
    const { success, isInProgress } = await getInProgress()
    if (success && isInProgress) {
      const link = document.querySelector(
        'span.download-icon > a[target="_blank"]'
      ).href
      const encodedLink = new URLSearchParams(link).get('getmp3')
      const decodedLink = window.atob(encodedLink).split('|')[2]

      window.open(decodedLink, '_self')
    }
  }
}
