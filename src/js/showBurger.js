const showBurger = () => {
  const burger = document.querySelector('.header__burger');
  const mainMenu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger-active');
    mainMenu.classList.toggle('header__menu-active');
    overlay.classList.toggle('overlay-active');
    if (body.style.overflow !== 'hidden') {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  });
};
export default showBurger;
