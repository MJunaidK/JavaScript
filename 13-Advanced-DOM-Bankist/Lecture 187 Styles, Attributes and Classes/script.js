'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Lecture 187 starts

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="button btn--close-cookie">Got it!</button>';
header.before(message);

// STYLES

// set as inline styles in DOM
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor); // rgb(55, 56, 61), a backgroundColor was set as inline style above.

console.log(message.style.color);
console.log(message.style.height);
// no output as using the style property works only for inline style and color and height is not set as inline

console.log(getComputedStyle(message).color); // rgb(187, 187, 187), outputs the color for the message element define in css file.

// getComputedStyle for setting/updating the style which are not set using inline styles
console.log(getComputedStyle(message).height); // 35.3333px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Setting the CSS custom property aka CSS variables using js
document.documentElement.style.setProperty('--color-primary', 'orangered'); // --color-primary is defined as css variable, we are updating in js code using setProperty

// ATTRIBUTES
const logo = document.querySelector('.nav__logo');

// Standard attributes
console.log(logo.alt); //Bankist logo
console.log(logo.src); // file:// c:/Junaid/.../img/logo.png
console.log(logo.className); // nav__logo

//Non-standard attributes
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Junaid

// setting attributes
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absolute: file:// c:/Junaid/.../img/logo.png
console.log(logo.getAttribute('src')); // relative: img/logo.png

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //absolute: file:// c:/Junaid/.../index.html#
console.log(link.getAttribute('href')); // #

// Data Attributes: these  are special attributes, they are always stored in the dataset object
console.log(logo.dataset.versionNumber); //3.0

// CLASSES

logo.classList.add('class1', 'class2');
logo.classList.remove('class1', 'class2');
logo.classList.toggle('class1');
logo.classList.contains('class1');

// Don't use:  this will override all the existing classes and also it allows us to only put one class on any element
logo.className = 'junaid';
// Lecture 187 ends
