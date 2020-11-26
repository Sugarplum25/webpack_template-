const arrow = document.querySelector('.pageup');

export const showArrow = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      arrow.classList.add('show');
    }
    if (window.pageYOffset < 500) {
      arrow.classList.remove('show');
    }
  });
};

export const pageup = () => {
  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  });
};
