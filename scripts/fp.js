const homeButton = document.getElementsByClassName('homeButton')[0]
const projectsButton = document.getElementsByClassName('projectsButton')[0]
const aboutButton = document.getElementsByClassName('aboutButton')[0]
const navBar = document.getElementsByClassName('navBar')[0]
const nameLogo = document.getElementsByClassName('name-logo')[0]
const nameLogoDynamic = document.getElementsByClassName('name-logo-dynamic')[0]
const blinkingCursor = document.getElementsByClassName('blinking-cursor')[0]

new fullpage('#fullPage', {
    autoScrolling: true,
    menu: '#menu',
	lockAnchors: false,
    anchors:['home', 'projects', 'about'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
    controlArrows: false,
    onLeave: function(origin, destination, direction, trigger){
        if (destination.index == 0) {
            homeButton.click()
            projectsButton.classList.remove("active")
            aboutButton.classList.remove("active")
            navBar.classList.remove("ligthBackground")
            navBar.classList.add("darkBackground")
            nameLogoDynamic.textContent = "Home>"
        } else if (destination.index == 1) {
            homeButton.classList.remove("active")
            projectsButton.click()
            aboutButton.classList.remove("active")
            navBar.classList.remove("darkBackground")
            navBar.classList.add("lightBackground")
            nameLogoDynamic.textContent = "Projects>"
        } else if (destination.index == 2) {
            homeButton.classList.remove("active")
            projectsButton.classList.remove("active")
            aboutButton.click()
            navBar.classList.remove("ligthBackground")
            navBar.classList.add("darkBackground")
            nameLogoDynamic.textContent = "About>"
        }
    }
})