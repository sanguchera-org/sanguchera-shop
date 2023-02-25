import { atom } from 'recoil';
import { Product } from '../../models';

export const cartState = atom<Product[]>({
  key: 'cartState',
  default: [],
});
