import {css} from 'styled-components';
import {map} from 'styled-components-breakpoint';

function sizeMixin({size, width, theme}) {

  if (width) {
    console.warn('`width` is deprecated. Use `size` instead.'); //eslint-disable-line
  }

  return map(size || width, (value = 1) => {
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
        `;

      default: {
        const pct = Math.round(value * 100 * 10000) / 10000; //round to 4 decimal places
        return `
          flex-basis: ${pct}%;
          max-width: ${pct}%;
        `;
      }

    }
  }, theme.breakpoints);
}

function visibilityMixin({visible, theme}) {

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof visible === 'undefined') {
    return '';
  }

  return map(visible, value => {
    if (value === false) {
      return 'display: none;';
    } else {
      return 'display: flex;';
    }
  }, theme.breakpoints);
}

export default function(props) {
  return css`
    box-sizing: border-box;
    ${sizeMixin(props)}
    ${visibilityMixin(props)}
  `;
}
