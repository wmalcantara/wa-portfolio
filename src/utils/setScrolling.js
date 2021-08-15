export const setScrolling = (target) => {
  window.addEventListener('scroll', () => {
    let header = document.querySelector(target);
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
  });
};
