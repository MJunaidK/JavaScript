//Lecture 273 starts

// If one module imports a module which has a top-level await, then the importing module will wait for the imported module to finish the blocking code.
import add, { cart } from './shoppingCart.js';
add('pizza', 2);

console.log(cart);
// Top level await: the await keyword is now working outside of an async function.
// this actually blocks the execution of the entire module now.
/*
console.log('Start Fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');*/

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
//const lastPost2 = lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

//Lecture 273 ends
