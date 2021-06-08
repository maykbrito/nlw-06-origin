/* Variables */
const header = document.querySelector('header')
const nav = header.querySelector('nav')
const menuButton = header.querySelector('button')

/* WHEN CONTENT LOADED */
window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', stickyMenu)
  menuButton.addEventListener('click', activateMenu)
})

/* STICK MENU */
function stickyMenu() {
  header.classList.toggle('sticky', window.scrollY > 0)
}

/* MOBILE MENU */
function activateMenu() {
  document.body.classList.toggle('no-scroll')
  nav.classList.toggle('active')
}
