homeButton.click()

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration * 1000)
    })
}

async function animateName() {
    const name = document.getElementsByClassName("tracking-in-expand")[0]
    await sleep(1) 
    name.classList.remove("tracking-in-expand")
}

animateName()