const homeButton = document.getElementsByClassName('homeButton')[0]
const projectsButton = document.getElementsByClassName('projectsButton')[0]
const aboutButton = document.getElementsByClassName('aboutButton')[0]
const navBar = document.getElementsByClassName('navBar')[0]

new fullpage('#fullPage', {
    autoScrolling: true,
    anchors:['s1', 's2', 's3'],
    controlArrows: true,
    slidesNavigation: true,
	slidesNavPosition: 'bottom',
    onLeave: function(origin, destination, direction, trigger){
        if (destination.index == 0) {
            homeButton.click()
            projectsButton.classList.remove("active")
            aboutButton.classList.remove("active")
            navBar.classList.remove("ligthBackground")
            navBar.classList.add("darkBackground")
        } else if (destination.index == 1) {
            homeButton.classList.remove("active")
            projectsButton.click()
            aboutButton.classList.remove("active")
            navBar.classList.remove("darkBackground")
            navBar.classList.add("lightBackground")
        } else if (destination.index == 2) {
            homeButton.classList.remove("active")
            projectsButton.classList.remove("active")
            aboutButton.click()
            navBar.classList.remove("ligthBackground")
            navBar.classList.add("darkBackground")
        }
    }
})
