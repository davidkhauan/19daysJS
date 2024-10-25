function checkVowels() {
    var text = document.getElementById ('inputText').value
    var vowelCount = 0

    text = text.toLowerCase()

    for (var index = 0; index < text.length; index++) {
        var character = text.charAt (index)

        if (isVowel (character)) {
            vowelCount++
        }
    }

    var result = document.getElementById ('result')
    result.textContent = `Total Vowels: ${vowelCount}`
}

function isVowel (character) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes (character)
}