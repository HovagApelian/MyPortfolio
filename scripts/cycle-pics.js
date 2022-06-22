let pic = document.getElementsByClassName("sensible-pic")[0]
let pics = ["./pics/sensible-pic-1.png", "./pics/sensible-pic-2.png"]

let num = 0

setInterval(async function(){
    pic.classList.add("flip-in-hor-bottom")
    pic.src = pics[num]
    await sleep(5)
    pic.classList.remove("flip-in-hor-bottom")
    if (num == 0) {
        num = 1
    } else {
        num = 0
    }
}, 3000)