/* Variables  ============================================== */
const header = document.querySelector('header')
const nav = header.querySelector('nav')
const menuButton = header.querySelector('button')
const links = document.querySelectorAll('header nav ul li a')

/* WHEN CONTENT LOADED ===================================== */
window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', e => {
    stickyMenu()
    showBackToTopButton()
    activateCurrentMenuOfVisibleSection(e)
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

/* HIGHLIGHT CURRENT SECTION MENU =========================== */
const navHeight = 55
let lastActiveLink
let sections = []

for (let section of document.querySelectorAll('section')) {
  const sectionTop = section.offsetTop - navHeight
  const sectionId = section.getAttribute('id')
  const link = document.querySelector(`a[href="#${sectionId}"`)

  sections.push({
    sectionTop,
    link
  })
}

function activateCurrentMenuOfVisibleSection() {
  const currentPosition = window.pageYOffset

  sections.forEach(({ sectionTop, link }) => {
    if (currentPosition >= sectionTop) {
      lastActiveLink && lastActiveLink.classList.remove('active')
      link.classList.add('active')
      lastActiveLink = link
    }
  })
}

/* SMOOTH SCROLL ============================================ */
// const navHeight = 55

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

/* auto scroll when enter page with hash */
setTimeout(function () {
  if (location.hash) {
    window.scrollTo(0, 0)
    const target = location.hash.split('?')
    scrollToTarget(target)
  }
}, 1)

/* SMOOTH SCROLL -  BACK TO TOP ============================= */
const backToTopButton = document.querySelector('#back-to-top')

backToTopButton.addEventListener('click', e => {
  e.preventDefault()
  smoothScroll('#home')
})

function showBackToTopButton() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* LIB: TINY SLIDER ============================= 
https://github.com/ganlanyuan/tiny-slider
*/
tns({
  container: '.my-testimonials',
  items: 1,
  slideBy: 'page',
  mouseDrag: true,
  controls: false,
  navPosition: 'bottom',
  arrowKeys: true
})
