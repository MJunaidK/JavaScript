'use strict';

// Previous lecture code starts
const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
// Previous lecture code ends

// Since ES 2017, there is now an even better and easier way to consume promises, which is called a sync await.

// async - basically will keep the function running in the background while performing the code that inside of it

// await will stop the code execution at this point of the function until the promise is fulfilled - this function is running asynchronously in the background. And so therefore it is not blocking the main thread of execution. So it's not blocking the call stack.

const whereAmI = async function () {
  // Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    // Adding return
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 🤦‍♂️`);
    renderError(`Something went wrong 🤦‍♂️ ${err.message}`);

    // Rejected promise returned from async function
    throw err;
  }
};

/*try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}*/

// Lecture 264 starts

console.log('1: Will get location');
//const city = whereAmI();
//console.log(city);
/*
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.log(`2: ${err.message} 😪`))
  .finally(console.log('3: Finished getting location'));*/

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
// Lecture 264 ends
