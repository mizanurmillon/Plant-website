/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const menuIcon = document.getElementById('menu-icon')

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]')
    menuIcon.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('left-[0]')
        menuIcon.classList.remove('ri-close-large-line')
    })
})


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/