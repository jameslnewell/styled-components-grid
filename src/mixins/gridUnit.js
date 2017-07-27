import {css} from 'styled-components';
import {map} from 'styled-components-breakpoint';

//TODO: fix issues with partial pixels
function width({width, theme}) {
  return map(width, (value = 1) => {
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
        const pct = Math.round(value * 100);
        return `
          flex-basis: ${pct}%;
          max-width: ${pct}%;
        `;
      }

    }
  }, theme.breakpoints);
}

function visibility({visible, theme}) {

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof visible === 'undefined') {
    return '';
  }

  return map(visible, value => {
    if (value === false) {
      return 'display: none;';
    } else {
      return 'display: unset;';
    }
  }, theme.breakpoints);
}

export default function(props) {
  return css`
    box-sizing: border-box;
    ${width(props)}
    ${visibility(props)}
  `;
}
