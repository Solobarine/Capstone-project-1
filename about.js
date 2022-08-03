// Select Elements
const nav = document.querySelector('.a-nav');
const hamburger = document.querySelector('#ham-menu');
const exit = document.querySelector('#a-exit');
const menu = document.querySelector('#nav-menu');
const holder = document.querySelector('#this-menu');

// Create Functions
function aopenMenu() {
  nav.style.position = 'fixed';
  hamburger.style.display = 'none';
  exit.style.display = 'block';
  menu.style.display = 'block';
  menu.classList.add('a-menu');
  holder.classList.add('pop-menu');
}

function acloseMenu() {
  nav.style.position = 'static';
  hamburger.style.display = 'block';
  exit.style.display = 'none';
  menu.style.display = 'none';
  menu.classList.remove('a-menu');
  holder.classList.remove('pop-menu');
}

// Add Event Listeners
hamburger.addEventListener('click', aopenMenu);
exit.addEventListener('click', acloseMenu);
