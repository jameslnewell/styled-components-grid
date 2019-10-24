import {css} from 'styled-components';
import {
  BreakpointNameConstraint,
  MapFunction,
} from 'styled-components-breakpoint';
import {GridOptions} from './types';
import {createHorizontalAlignMixin} from './createHorizontalAlignMixin';
import {createVerticalAlignMixin} from './createVerticalAlignMixin';
import {createReverseMixin} from './createReverseMixin';
import {createWrapMixin} from './createWrapMixin';

export function createGrid<B extends BreakpointNameConstraint>(
  map: MapFunction<B>,
): (options: GridOptions<B>) => ReturnType<MapFunction<B>> {
  const halign = createHorizontalAlignMixin(map);
  const valign = createVerticalAlignMixin(map);
  const reverse = createReverseMixin(map);
  const wrap = createWrapMixin(map);
  return (options: GridOptions<B>) => {
    return css`
      display: flex;
      ${halign(options)}
      ${valign(options)}
      ${reverse(options)}
      ${wrap(options)}
    `;
  };
}
