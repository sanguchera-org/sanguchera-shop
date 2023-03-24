import { render } from '@testing-library/react';

import RightSide from './right-side';

describe('RightSide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RightSide />);
    expect(baseElement).toBeTruthy();
  });
});
