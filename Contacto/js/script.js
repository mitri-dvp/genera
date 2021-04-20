// Hamburger
const burger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  mobile.classList.toggle('show');
});

// Form Focus
const inputs = [...document.querySelectorAll('input')];
const inputsNode = document.querySelectorAll('input');
const label = [...document.querySelectorAll('label')];
const labelNode = [...document.querySelectorAll('label')];
const textArea = document.querySelector('textarea');

window.addEventListener('mousedown', focus);

function focus(e) {
  if (e.target === inputs[0] || e.target === label[0]) {
    inputs[0].classList.add('active');
    label[0].classList.add('active');
  } else {
    inputs[0].classList.remove('active');
    label[0].classList.remove('active');
  }
  if (e.target === inputs[1] || e.target === label[1]) {
    inputs[1].classList.add('active');
    label[1].classList.add('active');
  } else {
    inputs[1].classList.remove('active');
    label[1].classList.remove('active');
  }
  if (e.target === textArea || e.target === label[2]) {
    textArea.classList.add('active');
    label[2].classList.add('active');
  } else {
    textArea.classList.remove('active');
    label[2].classList.remove('active');
  }
}

// Form Validator & POST
let isSent = false;
const form = document.querySelector('form');
const msg = document.querySelector('#formMessage')
const error = document.querySelector('.error');
const success = document.querySelector('.success')
form.addEventListener('submit', validate);

function validate(e) {
  e.preventDefault();
  if(isSent === false){
  if (inputs[0].value === '' || inputs[1].value === '' || msg.value === '') {
    error.classList.add('active');
    setTimeout(() => {
      error.classList.remove('active');
    }, 3000);
  } else {
    let data = new FormData(form)
    console.log(data)
    fetch('./js/post.php', {
        method: 'POST',
        body: data
    })
    .then(res => res.json())
    .then(data => {
            console.log(data)
        if(data == 'Se ha enviado su mensaje!'){
            success.innerHTML = `Se ha enviado su mensaje!`
            success.classList.add('active')
            isSent = true;
        } else {
            success.innerHTML = `test`
        }
    })
  }
  }
}

// Transition & Hero
const wrappers = document.querySelectorAll('.wrapper-js');
const hero = document.querySelector('main');
window.addEventListener('load', transition());

function transition() {
  setTimeout(() => {
    wrappers.forEach(wrapper => wrapper.classList.add('active'));
  }, 200);
}
