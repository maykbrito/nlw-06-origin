/* WHEN CONTENT LOADED */
window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', stickyMenu)
})

/* STICK MENU */
function stickyMenu() {
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
}
