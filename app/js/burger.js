export default function burger() {
  const burger = document.querySelector('.burger-button');
  const bodyLock = document.querySelector('body');
  const mobileMenu = document.querySelector('.mobile-menu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
      bodyLock.classList.add('lock')
    }
  });

  document.addEventListener('click', e => {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('active');
      bodyLock.classList.remove('lock');
    }
  });
}