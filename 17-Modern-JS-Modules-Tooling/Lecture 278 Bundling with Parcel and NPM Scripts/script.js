import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: '5' },
    { product: 'pizza', quantity: '5' },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
