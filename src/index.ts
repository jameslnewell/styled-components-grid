export * from './createGrid';
export * from './createGrid/types';
export * from './createGridUnit';
export * from './createGridUnit/types';

import {grid, gridUnit} from './mixins';
import {Grid, GridUnit} from './components';
export {
  GridProps as ThemedGridProps,
  GridUnitProps as ThemedGridUnitProps,
} from './components';

/* eslint-disable @typescript-eslint/no-explicit-any */
const g: typeof grid & {unit: typeof gridUnit} = grid as any;
g.unit = gridUnit;

const G: typeof Grid & {Unit: typeof GridUnit} = Grid as any;
G.Unit = GridUnit;
/* eslint-enable @typescript-eslint/no-explicit-any */

export {g as grid, G as Grid, G as default};
