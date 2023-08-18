const request = (path) => {
    let httpRequest

    const makeRequest = (path) => {
        httpRequest = new XMLHttpRequest()

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance')
            return false
        }
        httpRequest.onreadystatechange = alertContents
        httpRequest.open('GET', `http://localhost:5000/${path}`)
        httpRequest.send()
    }

    const alertContents = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                document.getElementById('random-res').innerText = httpRequest.responseText
            } else {
                alert('There was a problem with the request.')
            }
        }
    }
    
    makeRequest(path)
}

document.getElementById('get-random').addEventListener('click', () => {
    request('random')
})