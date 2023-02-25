import { cartState } from './cart.atom';
import { selector } from 'recoil';

export const quantityCartSelector = selector({
  key: 'quantityCartSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.length;
  },
});
