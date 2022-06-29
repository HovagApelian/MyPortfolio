homeButton.click()
nameLogoDynamic.textContent = "Home>"

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

/* async function cycleNameLogoColors() {
    
    /*const colors = ['#F58C8C', '#F5A48C', '#F5AD8C', '#F5CB8C', '#F5D98C', '#D3F58C',
     '#AFF58C', '#8CF5B6', '#8CDEF5', '#8CB2F5', '#8C8FF5', '#AB8CF5', '#CB8CF5', 
     '#F58CF0', '#F58CCC', '#F58CA6', '#F58CAD'] 

    while (true) {
        let random = Math.floor(Math.random() * 2)
        nameLogo.style.color = colors[random]
        blinkingCursor.style.color = colors[random]
        nameLogoDynamic.style.color = colors[random]
        await sleep(2)
    }
}

cycleNameLogoColors() */