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