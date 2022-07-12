$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

$(document).ready(function(){
    document.getElementsByClass
    $(this).addClass('active').siblings().removeClass('active')
})

const hamburgerButton = document.getElementsByClassName('hamburger-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburgerButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

