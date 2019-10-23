import 'jest-styled-components';
import * as React from 'react';
import {render} from '@testing-library/react';
import {HorizontalAlign, VerticalAlign} from '../types';
import {Grid} from './Grid';

const halignValues = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  'justify-center': 'space-around',
  justify: 'space-between',
};

const valignValues = {
  top: 'flex-start',
  bottom: 'flex-end',
  center: 'center',
  stretch: 'stretch',
};

describe('Grid', () => {
  (Object.keys(halignValues) as HorizontalAlign[]).forEach(value => {
    it(`should render halign as "${value}"`, () => {
      const {container} = render(<Grid halign={value} />);
      expect(container.firstChild).toHaveStyleRule(
        'justify-content',
        halignValues[value],
      );
    });
  });

  it('should render halign at different breakpoints', () => {
    const {container} = render(
      <Grid halign={{mobile: 'left', tablet: 'center', desktop: 'right'}} />,
    );
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'flex-start',
    );
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center', {
      media: 'screen and (min-width:46.0625em)',
    });
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'flex-end',
      {media: 'screen and (min-width:74.6875em)'},
    );
  });

  (Object.keys(valignValues) as VerticalAlign[]).forEach(value => {
    it(`should render valign as "${value}"`, () => {
      const {container} = render(<Grid valign={value} />);
      expect(container.firstChild).toHaveStyleRule(
        'align-items',
        valignValues[value],
      );
    });
  });

  it('should render valign at different breakpoints', () => {
    const {container} = render(
      <Grid valign={{mobile: 'top', tablet: 'center', desktop: 'bottom'}} />,
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center', {
      media: 'screen and (min-width:46.0625em)',
    });
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-end', {
      media: 'screen and (min-width:74.6875em)',
    });
  });

  it(`should render reverse as "true"`, () => {
    const {container} = render(<Grid reverse={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'flex-direction',
      'row-reverse',
    );
  });

  it(`should render reverse as "false"`, () => {
    const {container} = render(<Grid reverse={false} />);
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
  });

  it('should render reverse at different breakpoints', () => {
    const {container} = render(
      <Grid reverse={{mobile: true, tablet: false, desktop: true}} />,
    );
    expect(container.firstChild).toHaveStyleRule(
      'flex-direction',
      'row-reverse',
    );
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row', {
      media: 'screen and (min-width:46.0625em)',
    });
    expect(container.firstChild).toHaveStyleRule(
      'flex-direction',
      'row-reverse',
      {media: 'screen and (min-width:74.6875em)'},
    );
  });

  it(`should render wrap as "true"`, () => {
    const {container} = render(<Grid wrap={true} />);
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
  });

  it(`should render wrap as "true" when reverse is "true"`, () => {
    const {container} = render(<Grid wrap={true} reverse={true} />);
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap-reverse');
  });

  it(`should render wrap as "false"`, () => {
    const {container} = render(<Grid wrap={false} />);
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'nowrap');
  });

  it('should render wrap at different breakpoints', () => {
    const {container} = render(
      <Grid wrap={{mobile: true, tablet: false, desktop: true}} />,
    );
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'nowrap', {
      media: 'screen and (min-width:46.0625em)',
    });
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap', {
      media: 'screen and (min-width:74.6875em)',
    });
  });
});
