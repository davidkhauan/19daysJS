document.addEventListener ('mousemove', (event) => {
    const body = document.querySelector ('body')
    const scratcher = document.createElement ('span')

    scratcher.style.left = -17 + event.clientX + 'px'
    scratcher.style.top = -17 + event.clientY + 'px'

    body.append (scratcher)
})