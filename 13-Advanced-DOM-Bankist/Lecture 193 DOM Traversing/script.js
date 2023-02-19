'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

// Button Scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  /*window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );*/

  // Old way
  /*window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });*/

  // New modern browser approach for scrolling

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation

/*document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('LINK');
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
}); */

// Event Delegation

// 1. Add event listener to common parent element.
// 2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Lecture 193 starts

const h1 = document.querySelector('h1');

// Going downwards: selecting child elements.

console.log(h1.querySelectorAll('.highlight')); // NodeList(2) [span.highlight, span.highlight]

console.log(h1.childNodes); // NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children); // HTMLCollection(3) [span.highlight, br, span.highlight]

console.log(h1.firstElementChild); //<span class="highlight">banking</span>
h1.firstElementChild.style.color = 'white';

console.log(h1.lastElementChild); //<span class="highlight">minimalist</span>
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parent
console.log(h1.parentNode); //<div class="header__title">...</div>
console.log(h1.parentElement); //<div class="header__title">...</div>

// closest:
// think of closest here as basically being the opposite of querySelector. So both receive a query string as an input but querySelector, finds children, no matter how deep in the Dom tree, while the closest method finds parents. And also no matter how far up in the Dom tree.

console.log(h1.closest('.header')); //<header class="header">...</header>
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings

// element
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); // <h4>A simpler banking experience for a simpler life.</h4>

// node
console.log(h1.previousSibling); // #text{}
console.log(h1.nextSibling); // #text{}

// If we need all the siblings and not just the previous and the next one, then we can use the trick of moving up to the parent element and then read all the  children from there
console.log(h1.parentElement.children); //HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

// comparisons between elements
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)'; //scaling them by 50% and indeed all the other three siblings are now like 50% smaller.
});

// Lecture 193 ends
