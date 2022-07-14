const homeButton = document.getElementsByClassName('homeButton')[0]
const projectsButton = document.getElementsByClassName('projectsButton')[0]
const aboutButton = document.getElementsByClassName('aboutButton')[0]
const navBar = document.getElementsByClassName('navBar')[0]
const nameLogo = document.getElementsByClassName('name-logo')[0]
const nameLogoDynamic = document.getElementsByClassName('name-logo-dynamic')[0]
const nameLogoDynamic2 = document.getElementsByClassName('name-logo-dynamic')[1]
const blinkingCursor = document.getElementsByClassName('blinking-cursor')[0]
const arrowLottie = document.getElementsByClassName('arrowLottie')[0]
const publicationHeaderFont1 = document.getElementsByClassName('publication-header-font-1')[0]
const publicationPicContainer = document.getElementsByClassName('publication-pic-container')[0]

new fullpage('#fullPage', {
    licenseKey: '3KT0I-O86MH-4I9VI-7M7KK-WJCJP',
    autoScrolling: true,
    anchors:['home', 'projects', 'about'],
    controlArrows: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
    onLeave: function(origin, destination, direction, trigger) {
        arrowLottie.classList.add("hidden")
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
    }, 
    afterLoad: function(origin, destination, direction, trigger) {
        nameLogoDynamic2.textContent = ""
        if (destination.index == 0) {
            nameLogoDynamic.textContent = "Home>"
        } else if (destination.index == 1) {
            activeSlide = fullpage_api.getActiveSlide().index
            if (activeSlide == 0) {
                nameLogoDynamic.textContent = "Projects\\Guavah>"
            } else if (activeSlide == 1) {
                nameLogoDynamic.textContent = "Projects\\Sensible>"
            } else if (activeSlide == 2) {
                nameLogoDynamic.textContent = "Projects\\Research Paper>"
            }
        } else if (destination.index == 2) {
            nameLogoDynamic.textContent = "About>"
        }
    },
    afterSlideLoad: function(section, origin, destination, direction, trigger) {
        nameLogoDynamic2.textContent = ""
        if (section.anchor == 'projects') {
            if (destination.index == 0) {
                nameLogoDynamic.textContent = "Projects\\Guavah>"
            } else if (destination.index == 1) {
                nameLogoDynamic.textContent = "Projects\\Sensible>"
            } else if (destination.index == 2) {
                nameLogoDynamic.textContent = "Projects\\Research Paper>"
            }
        }
    },
    beforeLeave (origin, destination, direction, trigger) {
        if (!window.matchMedia("(max-width: 1110px)").matches) {
            if (origin.index == 0) {
                if (destination.index == 1) {
                    nameLogoDynamic2.textContent = "cd ..\\Projects\\"
                } else if (destination.index == 2) {
                    nameLogoDynamic2.textContent = "cd ../About"
                }
            }
    
            if (origin.index == 1) {
                if (destination.index == 0) {
                    nameLogoDynamic2.textContent = "cd ..\\..\\Home"
                } else if (destination.index == 2) {
                    nameLogoDynamic2.textContent = "cd ..\\..\\About"
                }
            }
    
            if (origin.index == 2) {
                if (destination.index == 0) {
                    nameLogoDynamic2.textContent = "cd ..\\Home"
                } else if (destination.index == 1) {
                    nameLogoDynamic2.textContent = "cd ..\\Projects\\"
                }
            }
          }
    },
    onSlideLeave: async function(section, origin, destination, direction, trigger){
        if (section.anchor == 'projects' && !window.matchMedia("(max-width: 1110px)").matches) {
            if (origin.index == 0) {
                if (destination.index == 1) {
                    nameLogoDynamic2.textContent = "cd ..\\Sensible"
                } else if (destination.index == 2) {
                    nameLogoDynamic2.textContent = "cd ..\\Research Paper"
                    publicationHeaderFont1.classList.remove("hidden")
                    publicationPicContainer.classList.remove("hidden")
                }
            }

            if (origin.index == 1) {
                if (destination.index == 0) {
                    nameLogoDynamic2.textContent = "cd ..\\Guavah"
                } else if (destination.index == 2) {
                    nameLogoDynamic2.textContent = "cd ..\\Research Paper"
                    publicationHeaderFont1.classList.remove("hidden")
                    publicationPicContainer.classList.remove("hidden")
                }
            }

            if (origin.index == 2) {
                if (destination.index == 0) {
                    nameLogoDynamic2.textContent = "cd ..\\Guavah"
                } else if (destination.index == 1) {
                    nameLogoDynamic2.textContent = "cd ..\\Sensible"
                }
            }
        }
    }
})