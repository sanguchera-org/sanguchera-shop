import { render } from '@testing-library/react';

import CheckoutDelivery from './checkout-delivery';

describe('CheckoutDelivery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckoutDelivery />);
    expect(baseElement).toBeTruthy();
  });
});
