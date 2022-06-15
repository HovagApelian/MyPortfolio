const homeButton = document.getElementsByClassName('s1Button')[0]
const projectsButton = document.getElementsByClassName('s2Button')[0]
const aboutButton = document.getElementsByClassName('s3Button')[0]

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
        } else if (destination.index == 1) {
            homeButton.classList.remove("active")
            projectsButton.click()
            aboutButton.classList.remove("active")
        } else if (destination.index == 2) {
            homeButton.classList.remove("active")
            projectsButton.classList.remove("active")
            aboutButton.click()
        }
    }
})