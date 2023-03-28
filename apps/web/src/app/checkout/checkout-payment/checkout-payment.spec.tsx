import { render } from '@testing-library/react';

import CheckoutPayment from './checkout-payment';

describe('CheckoutPayment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckoutPayment />);
    expect(baseElement).toBeTruthy();
  });
});
