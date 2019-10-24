import {
  BreakpointNameConstraint,
  MapFunction,
} from 'styled-components-breakpoint';
import {GridOptions} from './types';

export const createReverseMixin = <B extends BreakpointNameConstraint>(
  map: MapFunction<B>,
) => ({reverse}: GridOptions<B>) => {
  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (reverse === undefined) {
    return undefined;
  }
  return map(
    reverse,
    value => `flex-direction: ${(value && 'row-reverse') || 'row'};`,
  );
};
