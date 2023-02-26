import { atom } from 'recoil';
import { Cart } from '../../models';

export const cartState = atom<Cart>({
  key: 'cartState',
  default: [],
});
