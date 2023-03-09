import { render } from '@testing-library/react';

import Open from './open';

describe('Open', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Open />);
    expect(baseElement).toBeTruthy();
  });
});
