import { render } from '@testing-library/react';

import CartSummary from './cart-summary';

describe('CartSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartSummary />);
    expect(baseElement).toBeTruthy();
  });
});
