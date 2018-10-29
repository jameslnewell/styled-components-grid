// @flow
/* eslint-disable no-shadow */
import { css } from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { type BreakpointValues, type Size, type Visible } from '../types';

function size({ size }: { size: BreakpointValues<Size> }) {
  return map(size, (value = 1) => {
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
        const pct = Math.round((typeof value === 'number' ? value : 1) * 100 * 10000) / 10000; //round to 4 decimal places
        return `
          flex-basis: ${pct}%;
          max-width: ${pct}%;
        `;
      }
    }
  });
}

function visible({ visible }: { visible: BreakpointValues<Visible> }) {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof visible === 'undefined') {
    return '';
  }

  return map(visible, value => {
    if (value === false) {
      return 'display: none;';
    } else {
      return 'display: flex;'; /* TODO: does this always work as expected? */
    }
  });
}

export default function(props: { size: BreakpointValues<Size>, visible: BreakpointValues<Visible> }) {
  return css`
    box-sizing: border-box;
    ${size(props)} ${visible(props)};
  `;
}
