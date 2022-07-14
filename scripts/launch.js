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


//Cycle words - abour page
const cycleWords = document.getElementsByClassName("cycle-words")[0]
const currentTime = new Date().getHours()
let textList

if (currentTime >= 4 && currentTime < 12) {
    textList = ["Good morning", "Բարի լոյս", "Buenos Dias", "صباح الخير"]
} else if (currentTime >= 16 && currentTime < 20) {
    textList = ["Good evening", "Բարեի իրիկուն", "Buenos noches", "مساء الخير"]
} else {
    textList = ["Hello", "Բարեւ", "Hola", "مرحبا", "What's good", "سلام عليكم"]
}

let i = 0;
const cycleText = () => {
  cycleWords.innerHTML = textList[i]
  i = ++i % textList.length
}

cycleText()
setInterval(cycleText, 3000)

//remove some animations on smaller screen sizes
if (window.innerWidth < 1000) {
    publicationHeaderFont1.classList.remove("hidden")
    publicationPicContainer.classList.remove("hidden")
}