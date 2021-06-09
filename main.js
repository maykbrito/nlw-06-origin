/* Variables  ============================================== */
const header = document.querySelector('header')
const nav = header.querySelector('nav')
const menuButton = header.querySelector('button')
const links = document.querySelectorAll('header nav ul li a')

/* WHEN CONTENT LOADED ===================================== */
window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', () => {
    stickyMenu()
    showBackToTopButton()
  })
  menuButton.addEventListener('click', activateMenu)
})

/* STICK MENU ============================================== */
function stickyMenu() {
  header.classList.toggle('sticky', window.scrollY > 0)
}

/* MOBILE MENU ============================================== */
function activateMenu() {
  document.body.classList.toggle('no-scroll')
  nav.classList.toggle('active')
}

function deactivateMenu() {
  document.body.classList.remove('no-scroll')
  nav.classList.remove('active')
}

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    deactivateMenu()

    const target = event.currentTarget.getAttribute('href')
    scrollToTarget(target)
  })
})

/* SMOOTH SCROLL ============================================ */
const navHeight = 55

function scrollToTarget(target) {
  const element = document.querySelector(target)
  if (!element) return

  const elementOffsetTop = element.offsetTop
  const top = elementOffsetTop - navHeight
  smoothScroll(top)
}

function smoothScroll(top = 0) {
  window.scroll({ top, behavior: 'smooth' })
}

/* SMOOTH SCROLL -  BACK TO TOP ============================= */
const backToTopButton = document.querySelector('#back-to-top')

backToTopButton.addEventListener('click', e => {
  e.preventDefault()
  smoothScroll('#top')
})

function showBackToTopButton() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
