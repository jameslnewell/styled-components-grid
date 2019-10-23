import 'jest-styled-components';
import * as React from 'react';
import {render} from '@testing-library/react';
import {GridUnit} from './GridUnit';

describe('GridUnit', () => {
  it(`should render size`, () => {
    const {container} = render(<GridUnit size={0.3333} />);
    expect(container.firstChild).toHaveStyleRule('flex-basis', '33.33%');
    expect(container.firstChild).toMatchSnapshot();
  });

  it(`should render size as "min"`, () => {
    const {container} = render(<GridUnit size="min" />);
    expect(container.firstChild).toHaveStyleRule('flex-grow', '0');
    expect(container.firstChild).toMatchSnapshot();
  });

  it(`should render size as "max"`, () => {
    const {container} = render(<GridUnit size="max" />);
    expect(container.firstChild).toHaveStyleRule('flex-grow', '1');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render size at different breakpoints', () => {
    const {container} = render(
      <GridUnit size={{mobile: 1, tablet: 0.5, desktop: 0}} />,
    );
    expect(container.firstChild).toHaveStyleRule('flex-basis', '100%');
    expect(container.firstChild).toHaveStyleRule('flex-basis', '50%', {
      media: 'screen and (min-width:46.0625em)',
    });
    expect(container.firstChild).toHaveStyleRule('flex-basis', '0%', {
      media: 'screen and (min-width:74.6875em)',
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
