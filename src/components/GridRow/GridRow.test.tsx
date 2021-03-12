import { render } from '@testing-library/react';

import GridRow from './index';

describe('GridRow tests', () => {
  const matrix = new Array(50).fill(0);

  test('display correct numbers of elements', () => {
    const { container } = render(<GridRow list={matrix} />);
    expect(container.querySelectorAll('.cell').length).toBe(50);
  });
});
