const scrollIndicator = document.getElementById ('scrollIndicator')
const totalScrollHeight = document.body.scrollHeight - window.innerHeight

function updapteScrollIndicator() {
    const scrollPercentage = (window.scrollY / totalScrollHeight) * 100

    scrollContainer.style.width = scrollPercentage + '%'
}

window.addEventListener ('scroll', updapteScrollIndicator)

updapteScrollIndicator()