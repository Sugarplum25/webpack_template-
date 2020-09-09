const app = () => {
  const burger = document.querySelector('.header__burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger-active');
  });
};
export default app;
