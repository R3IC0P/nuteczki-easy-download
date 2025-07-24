import { Button } from '../components/Button'
import Toast, { toast } from '../components/Toast'

function deleteExistingButtons() {
  const existingButtons = document.querySelectorAll('.ned-js-download-btn')
  existingButtons.forEach((button) => button.remove())
  toast('Usunięto stare przyciski')
}

export function prepareButtons() {
  deleteExistingButtons()

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

export async function handleBtnClick(btn) {
  const { success } = await setInProgress(true)
  if (!success) return
  const url = btn.getAttribute('data-ned-href')
  toast('Rozpoczęto pobieranie', 5000)
  window.open(url)
}

export async function setInProgress(isInProgress) {
  try {
    await browser.storage.local.set({ NED_IS_IN_PROGRESS: isInProgress })
    return { success: true }
  } catch (err) {
    console.log('Błąd przy zapisie stanu operacji: ', err)
    toast('Upss... Hiuston mamy problem! Spróbuj ponownie.')
    return { success: false, error: err }
  }
}

export async function getInProgress() {
  try {
    const result = await browser.storage.local.get('NED_IS_IN_PROGRESS')
    return { success: true, isInProgress: result.NED_IS_IN_PROGRESS === true }
  } catch (err) {
    console.log('Błąd przy odczycie aktualnego stanu: ', err)
    toast('Upss... Hiuston mamy problem! Może jescze raz?')
    return { success: false, error: err }
  }
}
