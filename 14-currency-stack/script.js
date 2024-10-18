document.addEventListener ('mousemove', effect)

const layers = document.querySelectorAll ('.layer')

function effect (event) {
    layers.forEach ((layer) => {
        const movement = layer.getAttribute ('data-speed')
        let x = (window.innerWidth - event.pageX * movement) / 250
        let y = (window.innerHeight - event.pageX * movement) / 250

        layer.style.transform = `translate(${-x}px) translateY(${y}px)`
    })
}