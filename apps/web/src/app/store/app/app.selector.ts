import { tokenState } from './app.atom';
import { selector } from 'recoil';

export const isAuthenticatedSelector = selector({
  key: 'isAuthenticatedSelector',
  get: ({ get }) => {
    const token = get(tokenState);
    return token ? true : false;
  },
});
