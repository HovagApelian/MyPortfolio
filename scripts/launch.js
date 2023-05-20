homeButton.click()
nameLogoDynamic.textContent = "Home>"

//sleep function
function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration * 1000)
    })
}

//animate name - home page
async function animateName() {
    const name = document.getElementsByClassName("tracking-in-expand")[0]
    await sleep(1)
    name.classList.remove("tracking-in-expand")
    await sleep(3)
    arrowLottie.classList.remove("hidden")
}

animateName()


//Cycle words - about page
const cycleWords = document.getElementsByClassName("cycle-words")[0]
const currentTime = new Date().getHours()
let textList

if (currentTime >= 5 && currentTime < 12) {
    textList = ["Good morning", "Բարի լոյս", "صباح الخير"]
} else if (currentTime >= 12 && currentTime < 16) {
    textList = ["Good afternoon", "Բարեւ", "مرحبا"]
} else if (currentTime >= 18 && currentTime < 22) {
    textList = ["Good evening", "Բարի իրիկուն", "مساء الخير"]
} else {
    textList = ["Hello", "Բարեւ", "مرحبا", "What's poppin"]
}

let i = 0
const cycleText = () => {
  cycleWords.innerHTML = textList[i]
  i = ++i % textList.length
}

cycleText()
setInterval(cycleText, 3000)
