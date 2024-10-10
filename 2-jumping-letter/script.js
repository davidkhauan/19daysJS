const container = document.querySelectorAll ('.container span')

container.forEach ((letter) => {
    letter.addEventListener ('click', (event) => {
        event.target.classList.add ('active')
    })
})