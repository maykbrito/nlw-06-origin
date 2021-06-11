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
  const scrollPosition = window.pageYOffset

  for (let section of sections) {
    const sectionTop = section.offsetTop - navHeight
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    if (
      scrollPosition > sectionTop &&
      scrollPosition <= sectionTop + sectionHeight
    ) {
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

/*==== SERVICES MODAL =====*/

/*==== TESTIMONIAL SWIPER  =====*/

/*==== BACK TO TOP =====*/
