const mouseEvent = document.documentElement

mouseEvent.addEventListener ('mousemove', (event) => {
    mouseEvent.style.setProperty ('--x', event.clientX + 'px')
    mouseEvent.style.setProperty ('--y', event.clientY + 'px')
})