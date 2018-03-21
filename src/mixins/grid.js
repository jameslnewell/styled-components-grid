// @flow
/* eslint-disable no-shadow */
import { css } from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { type BreakpointValues, type HAlign, type VAlign, type Reverse, type Wrap } from '../types';

function halign({ halign, reverse }: { halign: BreakpointValues<HAlign>, reverse: BreakpointValues<Reverse> }) {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof halign === 'undefined' && typeof reverse === 'undefined') {
    return '';
  }

  return map(halign, (value = 'left') => {
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
            value
          )}"`
        );
    }
    return `justify-content: ${rule};`;
  });
}

function valign({ valign }: { valign: BreakpointValues<VAlign> }) {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof valign === 'undefined') {
    return '';
  }

  return map(valign, (value = 'stretch') => {
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
            value
          )}".`
        );
    }
    return `align-items: ${rule};`;
  });
}

function reverse({ reverse }: { reverse: BreakpointValues<Reverse> }) {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof reverse === 'undefined') {
    return '';
  }

  return map(reverse, (value = false) => `flex-direction: ${(value && 'row-reverse') || 'row'};`);
}

function wrap({ wrap, reverse }: { wrap: BreakpointValues<Wrap>, reverse: BreakpointValues<Reverse> }) {
  return map(wrap, (value = true) => {
    if (value && reverse) {
      return 'flex-wrap: wrap-reverse;';
    } else if (value === false) {
      return 'flex-wrap: nowrap;';
    } else {
      return 'flex-wrap: wrap;';
    }
  });
}

export default function(props: {
  wrap: BreakpointValues<Wrap>,
  reverse: BreakpointValues<Reverse>,
  halign: BreakpointValues<HAlign>,
  valign: BreakpointValues<VAlign>
}) {
  return css`
    display: flex;
    ${halign(props)}
    ${valign(props)}
    ${reverse(props)}
    ${wrap(props)}
  `;
}
