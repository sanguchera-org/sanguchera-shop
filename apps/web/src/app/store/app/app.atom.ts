import { atom } from 'recoil';
import { localStorageEffect } from '../effect';

export const tokenState = atom<string | null>({
  key: 'tokenState',
  default: null,
  effects_UNSTABLE: [localStorageEffect('tokenState')]
});
