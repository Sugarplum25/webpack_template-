export const app = () => {
  const burger = document.querySelector('.header__burger');
  burger.addEventListener('click', (e) => {
    burger.classList.toggle('header__burger-active');
});
};


