import { cartState } from './cart.atom';
import { selector } from 'recoil';
import { Summary } from '../../models';

export const quantityCartSelector = selector({
  key: 'quantityCartSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.length;
  },
});

export const summaryCartSelector = selector<Summary>({
  key: 'summaryCartSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    const subtotal = cart
      .flatMap(item => item.product.price * item.quantity)
      .reduce((partialSum, a) => partialSum + a, 0)
    const shipping = 0
    const discount = 0

    return {
      subtotal,
      shipping,
      discount,
      total: subtotal + shipping - discount,
    };
  },
});
