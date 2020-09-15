const app = () => {
  const burger = document.querySelector('.header__burger');
  const mainMenu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.overlay');
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger-active');
    mainMenu.classList.toggle('header__menu-active');
    overlay.classList.toggle('overlay-active');
  });
};
export default app;
