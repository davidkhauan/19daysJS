const myBtn = document.getElementById ('myBtn')
const myPopover = document.getElementById ('myPopover')
const closeBtn = document.getElementById ('closeBtn')

myBtn.addEventListener ('click', () => {
    myPopover.classList.add ('active')
})

closeBtn.addEventListener ('click', () => {
    myPopover.classList.remove ('active')
})