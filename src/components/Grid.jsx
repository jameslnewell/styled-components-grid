// @flow
import * as React from 'react';
import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import { type BreakpointValues, type HAlign, type VAlign, type Reverse, type Wrap } from '../types';
import grid from '../mixins/grid';
import GridUnit from './GridUnit';

export type GridProps = {
  halign?: BreakpointValues<HAlign>,
  valign?: BreakpointValues<VAlign>,
  reverse?: BreakpointValues<Reverse>,
  wrap?: BreakpointValues<Wrap>,
  children?: GridUnit[]
};

const GridComponent: React.Component<GridProps> = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['halign', 'valign', 'reverse', 'wrap']
});

const Grid = styled(GridComponent) `
  display: flex;
  ${grid}
`;

export default Grid;
