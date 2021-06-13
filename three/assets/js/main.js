/*==================== MENU ACTIONS ====================*/
const navigation = {
  menu: document.querySelector('.menu'),
  open: document.querySelector('.open'),
  close: document.querySelector('i.close')
}
/*===== CLICK BUTTON TO OPEN/CLOSE MENU =====*/

/*===== CLICK MENU ITEM TO HIDE MENU  =====*/
/* get all links: nav ul li a  */
const links = document.querySelectorAll('nav ul li a')
/* for each link, add click event */
for (let link of links) {
  link.addEventListener('click', handleLinkClick)
}
/* when click, remove show-menu class from navigation.menu */
function handleLinkClick() {
  navigation.menu.classList.remove('show-menu')
}

/*==== ACTIVE MENU LINK AT CURRENT SECTION =====*/
const sections = document.querySelectorAll('section[id]')
const navHeight = 69
window.addEventListener('scroll', activeMenuAtCurrentSection)
function activeMenuAtCurrentSection() {
  const pageYOffset = window.pageYOffset

  for (let section of sections) {
    const sectionTop = section.offsetTop - navHeight
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const reachStartOfSection = pageYOffset > sectionTop
    const reachEndOfSection = pageYOffset <= sectionTop + sectionHeight

    if (reachStartOfSection && reachEndOfSection) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*==== CHANGE HEADER AFTER SCROLL =====*/
const header = document.querySelector('#header')
window.addEventListener('scroll', changeHeaderAfterScroll)
function changeHeaderAfterScroll() {
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
}

/*==== BACK TO TOP =====*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', backToTop)
function backToTop() {
  window.scrollY >= 560
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show')
}

/*==== SERVICES MODAL =====*/

/*==== TESTIMONIAL SWIPER  =====*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is >= 767px
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*==== ANIMATION SCROLLREVEAL   =====*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonial header, #testimonial .testimonials,
  #contact .text, #contact .info, 
  footer .brand, footer .social`,
  {
    interval: 100
  }
)
