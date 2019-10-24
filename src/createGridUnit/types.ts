import {
  BreakpointNameConstraint,
  ValueOrValueMap,
} from 'styled-components-breakpoint';

export type Size = 'min' | 'max' | number;

export interface GridUnitOptions<B extends BreakpointNameConstraint> {
  size?: ValueOrValueMap<B, Size>;
}
