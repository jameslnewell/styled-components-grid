import {
  BreakpointNameConstraint,
  MapFunction,
} from 'styled-components-breakpoint';
import {GridOptions} from './types';

export const createVerticalAlignMixin = <B extends BreakpointNameConstraint>(
  map: MapFunction<B>,
) => ({valign}: GridOptions<B>) => {
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
