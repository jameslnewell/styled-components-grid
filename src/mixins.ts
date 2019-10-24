/* eslint-disable no-shadow,@typescript-eslint/explicit-function-return-type */
import {map} from 'styled-components-breakpoint';
import {createGrid} from './createGrid';
import {createGridUnit} from './createGridUnit';

export const grid = createGrid(map);
export const gridUnit = createGridUnit(map);
