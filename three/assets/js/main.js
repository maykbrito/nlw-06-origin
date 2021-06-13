const navigation = {
  nav: document.querySelector('header nav'),
  toggle: document.querySelectorAll('nav .toggle'),
  close: document.querySelector('i.close')
}

/*===== CLICK BUTTON TO OPEN/CLOSE MENU =====*/
function toggleMenu(toggle, nav) {
  if (toggle && nav) {
    for (element of toggle) {
      element.addEventListener('click', () => {
        nav.classList.toggle('show')
      })
    }
  }
}
toggleMenu(navigation.toggle, navigation.nav)

/*===== CLICK MENU ITEM TO HIDE MENU  =====*/
function hideMenuItemOnClick() {
  /* get all links: nav ul li a  */
  const links = document.querySelectorAll('nav ul li a')
  /* for each link, add click event */
  for (let link of links) {
    link.addEventListener('click', () => {
      /* when click, remove show class from navigation.nav */
      navigation.nav.classList.remove('show')
    })
  }
}
hideMenuItemOnClick()

/*==== ACTIVE MENU LINK AT CURRENT SECTION =====*/
function activeMenuAtCurrentSection() {
  const sections = document.querySelectorAll('section[id]')

  window.addEventListener('scroll', () => {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (let section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if (checkpointStart && checkpointEnd) {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add('active')
      } else {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove('active')
      }
    }
  })
}
activeMenuAtCurrentSection()

/*==== CHANGE HEADER AFTER SCROLL =====*/
function changeHeaderAfterScroll() {
  const header = document.querySelector('#header')
  const navHeight = document.querySelector('#header').offsetHeight

  window.addEventListener('scroll', () => {
    window.scrollY >= navHeight
      ? header.classList.add('scroll')
      : header.classList.remove('scroll')
  })
}
changeHeaderAfterScroll()

/*==== BACK TO TOP =====*/
function backToTop() {
  const button = document.querySelector('.back-to-top')

  window.addEventListener('scroll', () => {
    window.scrollY >= 560
      ? button.classList.add('show')
      : button.classList.remove('show')
  })
}
backToTop()

/*==== TESTIMONIAL SWIPER  =====*/
function testimonialSwiper() {
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
}
testimonialSwiper()

/*==== ANIMATION SCROLLREVEAL   =====*/
function animationScrollReveal() {
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
}
animationScrollReveal()
