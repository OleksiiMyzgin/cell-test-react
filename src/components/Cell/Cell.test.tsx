import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Cell from './index';

describe('Cell tests:', () => {
  test('snapshot', () => {
    const component = renderer.create(<Cell cell={0} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('display white element', () => {
    const { container } = render(<Cell cell={0} />);

    expect(container.querySelector('.cell')).toHaveClass('cell white');
  });

  test('display black element', () => {
    const { container } = render(<Cell cell={1} />);

    expect(container.querySelector('.cell')).toHaveClass('cell black');
  });
});
