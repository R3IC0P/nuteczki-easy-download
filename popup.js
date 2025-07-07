function getUserData() {
  if (localStorage.getItem('NED_USERDATA') === null) {
    localStorage.setItem('NED_USERDATA', JSON.stringify(defaltUserData))
  }
  const data = localStorage.getItem('NED_USERDATA')
  return JSON.parse(data)
}

const container = /* html */ `
  <div class="downloaded-songs">
    <button class="refresh-btn">Odśwież</button>
    <ul class="song-list"></ul>
  </div>
`
document.querySelector('.main').insertAdjacentHTML('beforeend', container)

const refreshBtn = document.querySelector('.refresh-btn')
refreshBtn.addEventListener('click', renderDownloadedSongs)

function renderDownloadedSongs() {
  const songList = document.querySelector('.song-list')
  const data = getUserData()

  data.song.downloaded.forEach((el) => {
    const link = /* html */ `
      <ul>
        <a href="${el}">${el}</a>
      </ul>
    `
    songList.insertAdjacentHTML('beforeend', link)
  })
}
