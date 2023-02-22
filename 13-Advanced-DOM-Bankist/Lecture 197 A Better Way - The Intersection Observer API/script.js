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

// Tabbed component

// select tabs
const tabs = document.querySelectorAll('.operations__tab');

// select tabs bar/container
const tabsContainer = document.querySelector('.operations__tab-container');

// select tabs content area
const tabsContent = document.querySelectorAll('.operations__content');

// Attaching event to tabs

// For 200 tabs this will create 200 copies of this exact callback function
//tabs.forEach(t => t.addEventListener('click', () => console.log('CLICK')));

// Event delegation: Attach the event handler on the common parent element of all the elements i.e tabsContainer here

tabsContainer.addEventListener('click', function (e) {
  // search for the closest operations tab.
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const nav = document.querySelector('.nav');
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing arguments into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1.0));

// Sticky Navigation

/*
const initialCoord = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoord.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}); */

// Lecture 197 starts

// Sticky navigation: Intersection Observer API
// this API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport

//In the current example, whenever the first section, so our target here, is intersecting the viewport at 10%, so the viewport, because that's the root, and 10% because that's the threshold. So whenever that happens, then this function here will get called and that's no matter if we are scrolling up or down
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {});
};

// root:   root is the element that the target(section1 here) is intersecting, we could now here select an element or as an alternative, we can write null, and then we will be able to observe our target element intersecting the entire viewport

// threshold: basically the percentage of intersection at which the observer callback will be called e.g here is 10% of the section 1 is inside the viewport or we can say 10% of section1 is visible

// 0% threshold means that basically our callback will trigger each time that the target element moves completely out of the view, and also as soon as it enters the view

// 1% means when 100% of the target is actually visible in the viewport. So in the case of this section one, that would be impossible because the section itself  is already bigger than the viewport.

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// Sticky header

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Lecture 197 ends
