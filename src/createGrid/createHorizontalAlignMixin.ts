import {
  BreakpointNameConstraint,
  MapFunction,
} from 'styled-components-breakpoint';
import {GridOptions} from './types';

export const createHorizontalAlignMixin = <B extends BreakpointNameConstraint>(
  map: MapFunction<B>,
) => ({halign, reverse}: GridOptions<B>) => {
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
