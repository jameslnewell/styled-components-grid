/* eslint-disable no-shadow,@typescript-eslint/explicit-function-return-type */
import {css} from 'styled-components';
import {map, ThemedValueOrValueMap} from 'styled-components-breakpoint';
import {HorizontalAlign, VerticalAlign, Reverse, Wrap} from '../types';
import {unit} from './unit';

export interface GridOptions {
  wrap?: ThemedValueOrValueMap<Wrap>;
  reverse?: ThemedValueOrValueMap<Reverse>;
  halign?: ThemedValueOrValueMap<HorizontalAlign>;
  valign?: ThemedValueOrValueMap<VerticalAlign>;
}

const halign = ({halign, reverse}: GridOptions) => {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (halign === undefined) {
    return undefined;
  }
  // FIXME: handle reverse responsively
  return map(halign, value => {
    let rule = '';
    switch (value) {
      case 'left':
        if (reverse) {
          rule = 'flex-end';
        } else {
          rule = 'flex-start';
        }
        break;

      case 'right':
        if (reverse) {
          rule = 'flex-start';
        } else {
          rule = 'flex-end';
        }
        break;

      case 'center':
        rule = 'center';
        break;

      case 'justify-center':
        rule = 'space-around';
        break;

      case 'justify':
        rule = 'space-between';
        break;

      default:
        throw new Error(
          `styled-components-grid: halign must be one of "left", "right", "center", "justify-center" or "justify". Got "${String(
            value,
          )}"`,
        );
    }
    return `justify-content: ${rule};`;
  });
};

const valign = ({valign}: GridOptions) => {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (valign === undefined) {
    return undefined;
  }
  return map(valign, value => {
    let rule = '';
    switch (value) {
      case 'top':
        rule = 'flex-start';
        break;

      case 'bottom':
        rule = 'flex-end';
        break;

      case 'center':
        rule = 'center';
        break;

      case 'stretch':
        rule = 'stretch';
        break;

      default:
        throw new Error(
          `styled-components-grid: valign must be one of "top", "bottom", "center" or "stretch". Got "${String(
            value,
          )}".`,
        );
    }
    return `align-items: ${rule};`;
  });
};

const reverse = ({reverse}: GridOptions) => {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (reverse === undefined) {
    return undefined;
  }
  return map(
    reverse,
    value => `flex-direction: ${(value && 'row-reverse') || 'row'};`,
  );
};

const wrap = ({wrap, reverse}: GridOptions) => {
  if (wrap === undefined) {
    return 'flex-wrap: wrap;';
  }
  // TODO: handle responsive reverse
  return map(wrap, value => {
    if (value && reverse) {
      return 'flex-wrap: wrap-reverse;';
    } else if (value === false) {
      return 'flex-wrap: nowrap;';
    } else {
      return 'flex-wrap: wrap;';
    }
  });
};

export const grid = (props: GridOptions) => {
  return css`
    display: flex;
    ${halign(props)}
    ${valign(props)}
    ${reverse(props)}
    ${wrap(props)}
  `;
};

grid.unit = unit;
