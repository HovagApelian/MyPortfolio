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
const textList = ["Hello", "Բարեւ", "مرحبا"]
const cycleWords = document.getElementsByClassName("cycle-words")[0]

let i = 0;
const cycleText = () => {
  cycleWords.innerHTML = textList[i]
  i = ++i % textList.length
}

cycleText()
setInterval(cycleText, 2000)