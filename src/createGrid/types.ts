import {
  ValueOrValueMap,
  BreakpointNameConstraint,
} from 'styled-components-breakpoint';

export type Wrap = boolean;

export type Reverse = boolean;

export type HorizontalAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify-center'
  | 'justify';

export type VerticalAlign = 'top' | 'bottom' | 'center' | 'stretch';

export interface GridOptions<B extends BreakpointNameConstraint> {
  wrap?: ValueOrValueMap<B, Wrap>;
  reverse?: ValueOrValueMap<B, Reverse>;
  halign?: ValueOrValueMap<B, HorizontalAlign>;
  valign?: ValueOrValueMap<B, VerticalAlign>;
}
