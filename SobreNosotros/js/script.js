// Hamburger
const burger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  mobile.classList.toggle('show');
});
// Transition & Hero
const wrappers = document.querySelectorAll('.wrapper-js');
const shader = document.querySelector('.shader');
window.addEventListener('load', transition());
const hero = document.querySelector('main');

function transition() {
  setTimeout(() => {
    shader.classList.add('active');
    wrappers.forEach(wrapper => wrapper.classList.add('active'));
  }, 200);
}
