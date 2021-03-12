import { queryAllByDisplayValue, render, screen } from '@testing-library/react';

import Cell from './index';

describe('Cell tests', () => {
  test('display white element', () => {
    const { container } = render(<Cell cell={0} />);

    expect(container.querySelector('.cell')).toHaveClass('cell white');
  });

  test('display black element', () => {
    const { container } = render(<Cell cell={1} />);

    expect(container.querySelector('.cell')).toHaveClass('cell black');
  });
});
