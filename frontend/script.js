const request = (path) => {
  let httpRequest

  const makeRequest = (path) => {
    httpRequest = new XMLHttpRequest()

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance')
      return false
    }
    httpRequest.onreadystatechange = alertContents
    httpRequest.open('GET', `https://nuzhdiki.timagribanov.com/api/${path}`)
    httpRequest.send()
  }

  const alertContents = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        document.getElementById(`${path}-res`).innerText = httpRequest.responseText
      } else {
        alert('There was a problem with the request.')
      }
    }
  }

  makeRequest(path)
}

document.getElementById('btn-neuro').addEventListener('click', () => {
  request('neuro')
})

document.getElementById('btn-random').addEventListener('click', () => {
  request('random')
})

document.getElementById('btn-mixed').addEventListener('click', () => {
  request('mixed')
})

const copyText = (path) => {
  let text = document.getElementById(`${path}-res`).innerText

  navigator.clipboard.writeText(text).then(
    () => console.log('Async: Copying to clipboard was successful!'),
    (err) => console.error('Async: Could not copy text: ', err)
  )
}

document.getElementById('copy-neuro').addEventListener('click', () => {
  copyText('neuro')
})

document.getElementById('copy-random').addEventListener('click', () => {
  copyText('random')
})

document.getElementById('copy-mixed').addEventListener('click', () => {
  copyText('mixed')
})