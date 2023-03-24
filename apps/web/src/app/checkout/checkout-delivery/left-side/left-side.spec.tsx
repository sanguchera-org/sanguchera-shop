import { render } from '@testing-library/react';

import LeftSide from './left-side';

describe('LeftSide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeftSide />);
    expect(baseElement).toBeTruthy();
  });
});
