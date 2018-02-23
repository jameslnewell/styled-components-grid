// @flow
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Grid from './Grid';

const halignValues = {
  'left': 'flex-start',
  'right': 'flex-end',
  'center': 'center',
  'justify-center': 'space-around',
  'justify': 'space-between'
};

const valignValues = {
  'top': 'flex-start',
  'bottom': 'flex-end',
  'center': 'center',
  'stretch': 'stretch',
};

describe('Grid', () => {

  Object.keys(halignValues).forEach((value) => {
    it(`should render halign as "${value}"`, () => {
      const element = renderer.create(<Grid halign={value} />).toJSON();
      expect(element).toHaveStyleRule('justify-content', halignValues[value]);
    });
  });

  it('should render halign at different breakpoints', () => {
    const element = renderer.create(<Grid halign={{ mobile: 'left', tablet: 'center', desktop: 'right' }} />).toJSON();
    expect(element).toHaveStyleRule('justify-content', 'flex-start');
    expect(element).toHaveStyleRule('justify-content', 'center', { media: '(min-width:46.0625em)' });
    expect(element).toHaveStyleRule('justify-content', 'flex-end', { media: '(min-width:64.0625em)' });
  });

  Object.keys(valignValues).forEach((value) => {
    it(`should render valign as "${value}"`, () => {
      const element = renderer.create(<Grid valign={value} />).toJSON();
      expect(element).toHaveStyleRule('align-items', valignValues[value]);
    });
  });

  it('should render valign at different breakpoints', () => {
    const element = renderer.create(<Grid valign={{ mobile: 'top', tablet: 'center', desktop: 'bottom' }} />).toJSON();
    expect(element).toHaveStyleRule('align-items', 'flex-start');
    expect(element).toHaveStyleRule('align-items', 'center', { media: '(min-width:46.0625em)' });
    expect(element).toHaveStyleRule('align-items', 'flex-end', { media: '(min-width:64.0625em)' });
  });

  it(`should render reverse as "true"`, () => {
    const element = renderer.create(<Grid reverse={true} />).toJSON();
    expect(element).toHaveStyleRule('flex-direction', 'row-reverse');
  });

  it(`should render reverse as "false"`, () => {
    const element = renderer.create(<Grid reverse={false} />).toJSON();
    expect(element).toHaveStyleRule('flex-direction', 'row');
  });

  it('should render reverse at different breakpoints', () => {
    const element = renderer.create(<Grid reverse={{ mobile: true, tablet: false, desktop: true }} />).toJSON();
    expect(element).toHaveStyleRule('flex-direction', 'row-reverse');
    expect(element).toHaveStyleRule('flex-direction', 'row', { media: '(min-width:46.0625em)' });
    expect(element).toHaveStyleRule('flex-direction', 'row-reverse', { media: '(min-width:64.0625em)' });
  });

  it(`should render wrap as "true"`, () => {
    const element = renderer.create(<Grid wrap={true} />).toJSON();
    expect(element).toHaveStyleRule('flex-wrap', 'wrap');
  });

  it(`should render wrap as "true" when reverse is "true"`, () => {
    const element = renderer.create(<Grid wrap={true} reverse={true} />).toJSON();
    expect(element).toHaveStyleRule('flex-wrap', 'wrap-reverse');
  });

  it(`should render wrap as "false"`, () => {
    const element = renderer.create(<Grid wrap={false} />).toJSON();
    expect(element).toHaveStyleRule('flex-wrap', 'nowrap');
  });

  it('should render wrap at different breakpoints', () => {
    const element = renderer.create(<Grid wrap={{ mobile: true, tablet: false, desktop: true }} />).toJSON();
    expect(element).toHaveStyleRule('flex-wrap', 'wrap');
    expect(element).toHaveStyleRule('flex-wrap', 'nowrap', { media: '(min-width:46.0625em)' });
    expect(element).toHaveStyleRule('flex-wrap', 'wrap', { media: '(min-width:64.0625em)' });
  });

});
