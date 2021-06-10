/*==================== MENU ACTIONS ====================*/
const navigation = {
  menu: document.querySelector('.menu'),
  open: document.querySelector('.open'),
  close: document.querySelector('i.close')
}
/*===== CLICK BUTTON TO OPEN MENU =====*/
/* Validate if button open exists */
if (navigation.open) {
  navigation.open.addEventListener('click', () => {
    navigation.menu.classList.add('show-menu')
  })
}
/*===== CLICK BUTTON TO CLOSE MENU =====*/
/* Validate if button close exists */
if (navigation.close) {
  navigation.close.addEventListener('click', () => {
    navigation.menu.classList.remove('show-menu')
  })
}
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

/*==================== SERVICES MODAL ====================*/

/*==================== TESTIMONIAL SWIPER  ====================*/

/*==================== ACTIVE LINK AT CURRENT SECTION ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== BACK TO TOP ====================*/
