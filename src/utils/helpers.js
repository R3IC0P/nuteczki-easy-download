import { Button } from '../components/Button'
import Toast from '../components/Toast'
import { defaltUserData } from './constants'

function prepareButtons() {
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

function getStatus() {
  return Number(localStorage.getItem('NED_STATUS'))
  // TODO: browser.storage.local.set(contentToStore)
}

function setStatus(statusCode = 0) {
  localStorage.setItem('NED_STATUS', statusCode)
}

function handleBtnClick(btn) {
  const url = btn.getAttribute('data-ned-href')
  setStatus(1)
  new Toast({ message: 'Rozpoczęto pobieranie' })
  markAsDownloaded(url)
  window.open(url)
}

function markAsDownloaded(url) {
  const data = JSON.parse(localStorage.getItem('NED_USERDATA'))
  data.song.downloaded.push(url)
  localStorage.setItem('NED_USERDATA', JSON.stringify(data))
}

function getUserData() {
  if (localStorage.getItem('NED_USERDATA') === null) {
    localStorage.setItem('NED_USERDATA', JSON.stringify(defaltUserData))
  }
  const data = localStorage.getItem('NED_USERDATA')
  return JSON.parse(data)
}

export { prepareButtons, setStatus, getStatus, getUserData }
