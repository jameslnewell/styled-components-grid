import {
  MapFunction,
  BreakpointNameConstraint,
} from 'styled-components-breakpoint';
import {GridUnitOptions} from './types';

export const createSizeMixin = <B extends BreakpointNameConstraint>(
  map: MapFunction<B>,
) => ({size}: GridUnitOptions<B>) => {
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
