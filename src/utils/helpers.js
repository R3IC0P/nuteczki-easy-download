import { Button } from '../components/Button'
import Toast from '../components/Toast'

export function prepareButtons() {
  const btns = document.querySelectorAll('.music-btn a.btn.btn-sm.btn-success')

  if (btns.length === 0) return

  btns.forEach((btn) => {
    btn.insertAdjacentHTML('afterend', Button(btn.href))
  })

  const easyBtns = document.querySelectorAll('.ned-js-download-btn')

  easyBtns.forEach((btn) => {
    btn.addEventListener('click', () => handleBtnClick(btn))
  })
}

export function handleBtnClick(btn) {
  const url = btn.getAttribute('data-ned-href')
  new Toast({ message: 'Rozpoczęto pobieranie', duration: 5000 })
  window.open(url)
}
