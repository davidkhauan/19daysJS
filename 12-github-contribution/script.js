const container = document.getElementById ('_container')

let greenColorCodes = [
    '#7CFC00',
    '#78AB46',
    '#3B5323',
    '#458B00',
    '#BCED91',
    '#61B329',
    '#5DFC0A',
    '#4CBB17',
    '#4AC948',
    '#00EE00',
    '#33FF33',
    '#00C957'
]

let greenColorCodes2 = [
    '#00FC00',
    '#782222',
    '#3B5323',
    '#400ddd'
]

const numberOfSquares = 96

for (let index = 0; index < numberOfSquares; index++) {
    const activity = document.createElement ('div')
    activity.classList.add ('activity')

    activity.addEventListener ('mouseover', () => {
        addColor (activity)
    })

    activity.addEventListener ('mouseout', () => {
        stickColor (activity)
    })

    container.appendChild (activity)
}

function addColor (squaresTitle) {
    const gettingColor = greenColors()
    
    squaresTitle.style.backgroundColor = gettingColor
    squaresTitle.style.boxshadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`
}

function stickColor (squaresTitle) {
    const gettingColor = greenColors2()
    
    squaresTitle.style.backgroundColor = gettingColor
    squaresTitle.style.boxshadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`
}

function greenColors() {
    return greenColorCodes [Math.floor (Math.random () * greenColorCodes.length)]
}
function greenColors2() {
    return greenColorCodes2 [Math.floor (Math.random () * greenColorCodes2.length)]
}