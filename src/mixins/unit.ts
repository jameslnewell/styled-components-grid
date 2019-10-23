/* eslint-disable no-shadow,@typescript-eslint/explicit-function-return-type */
import {css} from 'styled-components';
import {map, ThemedValueOrValueMap} from 'styled-components-breakpoint';
import {Size} from '../types';

export interface GridUnitOptions {
  size?: ThemedValueOrValueMap<Size>;
}

const size = ({size}: GridUnitOptions) => {
  if (size === undefined) {
    return `
      flex-basis: 100%;
      max-width: 100%;
    `;
  }
  return map(size, value => {
    switch (value) {
      case 'min':
        return `
          flex-grow: 0;
          flex-basis: auto;
          width: auto;
          max-width: none;
        `;
      case 'max':
        return `
          flex-grow: 1;
          flex-basis: auto;
          width: auto;
          max-width: none;
          max-width: 100%; /* TODO: does this always work as expected? */
        `;
      default: {
        const pct = Math.round(value * 100 * 10000) / 10000; //round to 4 decimal places
        return `
          flex-basis: ${pct}%;
          max-width: ${pct}%;
        `;
      }
    }
  });
};

export const unit = (props: GridUnitOptions) => {
  return css`
    box-sizing: border-box;
    ${size(props)};
  `;
};
