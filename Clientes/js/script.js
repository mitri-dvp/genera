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

// Logos

const logo = document.querySelector('.logos-js');
const logos = document.querySelectorAll('.logo-js');

window.addEventListener('scroll', test);
function test(e) {
  const halfPoint = window.scrollY + window.innerHeight - logo.clientHeight;
  const halfShown = halfPoint > logo.parentElement.offsetTop;
  if (halfShown) {
    logos[0].classList.add('active');
    logos[2].classList.add('active');
    setTimeout(() => {
      logos[1].classList.add('active');
      logos[3].classList.add('active');
    }, 500);
  }
}

/*
    logos.forEach(item => {
      item.classList.add('active');
    });
    logo.classList.add('active');
    */
