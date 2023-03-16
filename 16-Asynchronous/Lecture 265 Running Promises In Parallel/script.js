'use strict';

//  Code from previous lectures starts

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};
//  Code from previous lectures ends

const get3countries = async function (c1, c2, c3) {
  try {
    // Below code run all these Ajax calls one after another, even though the result of one here does not depend on next
    /*const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);*/

    // instead of running these promises in sequence, we can actually run them in parallel using Promise.all,  helper function on this promise constructor. So it's a static method,

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3countries('mexico', 'usa', 'canada');
