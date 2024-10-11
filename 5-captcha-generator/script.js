const display = document.getElementById ('_status')
const body = document.body
const submit = document.getElementById ('_submit')
const refresh = document.getElementById ('_refresh')

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let captcha = ""

body.onload = function generateCaptcha() {
    const captchaLength = 6
    
    for (let index = 0; index < captchaLength; index++) {
        const randomIndex = Math.floor (Math.random() * char.length)
        captcha += char.substring (randomIndex, randomIndex + 1)
    }

    document.getElementById ('_generator').value = captcha
    display.innerText = 'Captcha Generator'
}

submit.onclick = function checkInput() {
    const input = document.getElementById ('_client-text').value

    if (input === "") {
        display.innerText = 'Please Enter the text Shown below👇'
    } else if (input === captcha) {
        display.innerText = 'Captcha Matched😎'
    } else {
        display.innerText = 'Not-Matched😔'
    }
}

refresh.onclick = function refreshCaptcha() {
    let newCaptcha = ''

    for (let index = 0; index < captcha.length; index++) {
        const randomChar = char [Math.floor (Math.random() * char.length)]
        newCaptcha += randomChar
    }

    captcha = newCaptcha
    document.getElementById ('_generator').value = captcha
    display.innerText = 'Captcha Generator'
}