const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".navlinks")
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobileMenu')
})