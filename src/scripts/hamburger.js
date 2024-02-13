const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);

//note: this function is for Astro's view transition
document.addEventListener('astro:after-swap', () => {
  btn.classList.remove('open');
  overlay.classList.remove('overlay-show');
  document.body.classList.remove('stop-scrolling');
  menu.classList.remove('show-menu');
})


function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}
