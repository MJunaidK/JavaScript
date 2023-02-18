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

// Lecture 186 starts

// SELECTING ELEMENTS

//  Selecting the entire document
console.log(document.documentElement);

// Selecting head and body
console.log(document.head);
console.log(document.body);

// Selecting header element
const header = document.querySelector('.header');
console.log(header);

// Selecting multiple elements
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// Get Element by id
console.log(document.getElementById('section--1'));

// Get Element By tag Name
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Get Element by Class Name
console.log(document.getElementsByClassName('btn'));

// CREATING AND INSERTING ELEMENTS

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="button btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
//  Insert multiple copies of the same element
//header.append(message.cloneNode(true));

header.before(message);
// header.after(message);

// DELETE ELEMENTS

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  });

// Lecture 186 ends
