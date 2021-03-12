import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import GridRow from './index';

describe('GridRow test:', () => {
  const matrix = new Array(50).fill(0);

  test('snapshot', () => {
    const component = renderer.create(<GridRow list={matrix} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('display correct numbers of elements', () => {
    const { container } = render(<GridRow list={matrix} />);
    expect(container.querySelectorAll('.cell').length).toBe(50);
  });
});
