import { render } from '@testing-library/react';

import CartList from './cart-list';

describe('CartList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartList />);
    expect(baseElement).toBeTruthy();
  });
});
