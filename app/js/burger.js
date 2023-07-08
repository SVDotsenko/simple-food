export default function burger() {
  const burger = document.querySelector('.burger-button');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger-button--active');
  });
}