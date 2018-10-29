// @flow
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import GridUnit from './GridUnit';

describe('GridUnit', () => {

  it(`should render size`, () => {
    const element = renderer.create(<GridUnit size={0.3333} />).toJSON();
    expect(element).toHaveStyleRule('flex-basis', '33.33%');
    expect(element).toMatchSnapshot();
  });

  it(`should render size as "min"`, () => {
    const element = renderer.create(<GridUnit size="min" />).toJSON();
    expect(element).toHaveStyleRule('flex-grow', '0');
    expect(element).toMatchSnapshot();
  });

  it(`should render size as "max"`, () => {
    const element = renderer.create(<GridUnit size="max" />).toJSON();
    expect(element).toHaveStyleRule('flex-grow', '1');
    expect(element).toMatchSnapshot();
  });

  it('should render size at different breakpoints', () => {
    const element = renderer.create(<GridUnit size={{ mobile: 1, tablet: 0.5, desktop: 0 }} />).toJSON();
    expect(element).toHaveStyleRule('flex-basis', '100%');
    expect(element).toHaveStyleRule('flex-basis', '50%', { media: '(min-width:46.0625em)' });
    expect(element).toHaveStyleRule('flex-basis', '0%', { media: '(min-width:64.0625em)' });
    expect(element).toMatchSnapshot();
  });

  it(`should render visible as "true"`, () => {
    const element = renderer.create(<GridUnit visible={true} />).toJSON();
    expect(element).toHaveStyleRule('display', 'flex');
  });

  it(`should render visible as "false"`, () => {
    const element = renderer.create(<GridUnit visible={false} />).toJSON();
    expect(element).toHaveStyleRule('display', 'none');
  });

  it('should render visible at different breakpoints', () => {
    const element = renderer.create(<GridUnit visible={{ mobile: true, tablet: false, desktop: true }} />).toJSON();
    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('display', 'none', { media: '(min-width:46.0625em)' });
    expect(element).toHaveStyleRule('display', 'flex', { media: '(min-width:64.0625em)' });
  });

});
