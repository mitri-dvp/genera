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

// Slide-in
const slides = document.querySelectorAll('.slideIn-js');
const ul = document.querySelectorAll('ul');
const p = document.querySelector('.p-js');

slides.forEach(slide => slide);
window.addEventListener('scroll', slideIn);

function slideIn(e) {
  slides.forEach(slide => {
    const halfPoint =
      window.scrollY + window.innerHeight - slide.clientHeight / 2;
    const halfShown = halfPoint > slide.parentElement.offsetTop;
    const bottomPoint = slide.parentElement.offsetTop + slide.clientHeight;
    const notScrolled = window.scrollY < bottomPoint;
    if (halfShown) {
      slide.classList.add('active');
      const idx = slide.dataset.index;
      if (idx !== undefined) {
        setTimeout(() => {
          console.log(slide.dataset.index);
          ul[idx].classList.add('active');
        }, 100);
      }
      if (idx === '0') {
        setTimeout(() => {
          p.classList.add('active');
        }, 100);
      }
    }
  });
}

/*
      console.log(idx);
      if (idx == '1' || idx == '2' || idx == '3' || idx == '4') {
      }
      */
