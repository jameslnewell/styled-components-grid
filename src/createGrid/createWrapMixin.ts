import {
  BreakpointNameConstraint,
  MapFunction,
} from 'styled-components-breakpoint';
import {GridOptions} from './types';

export const createWrapMixin = <B extends BreakpointNameConstraint>(
  map: MapFunction<B>,
) => ({wrap, reverse}: GridOptions<B>) => {
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
