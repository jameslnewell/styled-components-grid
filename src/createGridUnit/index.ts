import {css} from 'styled-components';
import {
  BreakpointNameConstraint,
  MapFunction,
} from 'styled-components-breakpoint';
import {GridUnitOptions} from './types';
import {createSizeMixin} from './createSizeMixin';

export function createGridUnit<B extends BreakpointNameConstraint>(
  map: MapFunction<B>,
): (options: GridUnitOptions<B>) => ReturnType<MapFunction<B>> {
  const size = createSizeMixin(map);
  return (props: GridUnitOptions<B>) => {
    return css`
      box-sizing: border-box;
      ${size(props)};
    `;
  };
}
