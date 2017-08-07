import {css} from 'styled-components';
import {map} from 'styled-components-breakpoint';

function wrapMixin({wrap, reverse, theme}) {

  return map(wrap, (value = true) => {
    if (value && reverse) {
      return 'flex-wrap: wrap-reverse;';
    } else if (value === false) {
      return 'flex-wrap: nowrap;';
    } else {
      return 'flex-wrap: wrap;';
    }
  }, theme.breakpoints);
}

function directionMixin({reverse, theme}) {

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof reverse === 'undefined') {
    return '';
  }

  return map(reverse, (value = false) => `flex-direction: ${value && 'row-reverse' || 'row'};`, theme.breakpoints);
}

function justifyContentMixin({halign, horizontalAlign, reverse, theme}) {

  //warn about deprecated usage
  if (horizontalAlign) {
    console.warn('`horizontalAlign` is deprecated. Use `valign` instead.'); //eslint-disable-line 
  }

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  const alignment = halign || horizontalAlign;
  if (typeof alignment === 'undefined' && typeof reverse === 'undefined') {
    return '';
  }

  return map(alignment, value => {
    let rule = '';
    switch (value) {

      default:
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

    }
    return `justify-content: ${rule};`
  }, theme.breakpoints);
};

function alignItemsMixin({valign, verticalAlign, theme}) {

  //warn about deprecated usage
  if (verticalAlign) {
    console.warn('`verticalAlign` is deprecated. Use `valign` instead.'); //eslint-disable-line
  }

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  const alignment = valign || verticalAlign;
  if (typeof alignment === 'undefined') {
    return '';
  }

  return map(valign || verticalAlign, value => {
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

      default:
      case 'stretch':
        rule = 'stretch';
        break;

    }
    return `align-items: ${rule};`
  }, theme.breakpoints);
};

export default function(props) {
  return css`
    display: flex;
    ${wrapMixin(props)}
    ${directionMixin(props)}
    ${justifyContentMixin(props)}
    ${alignItemsMixin(props)}
  `;
}
