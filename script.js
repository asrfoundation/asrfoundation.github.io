const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? 'Close' : 'Menu';
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
}));

document.querySelector('#year').textContent = new Date().getFullYear();
