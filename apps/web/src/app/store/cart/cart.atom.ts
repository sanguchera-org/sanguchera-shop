import { atom } from 'recoil';
import { Cart } from '../../models';
import { localStorageEffect } from '../effect';

export const cartState = atom<Cart>({
  key: 'cartState',
  default: [],
  effects_UNSTABLE: [localStorageEffect('cartState')]
});
