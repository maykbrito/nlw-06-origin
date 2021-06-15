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

/*===== HIDE MENU WHEN CLICK ON ITEM  =====*/
function hideMenuWhenClickOnItem() {
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
hideMenuWhenClickOnItem()

/*==== CHANGE HEADER AFTER SCROLL =====*/
function changeHeaderAfterScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  window.addEventListener('scroll', () => {
    window.scrollY >= navHeight
      ? header.classList.add('scroll')
      : header.classList.remove('scroll')
  })
}
changeHeaderAfterScroll()

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
    #contact .text, #contact .info`,
    {
      interval: 100
    }
  )
}
animationScrollReveal()
