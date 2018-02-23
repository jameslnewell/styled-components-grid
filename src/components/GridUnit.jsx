// @flow
import * as React from 'react';
import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import { type BreakpointValues, type Size, type Visible } from '../types';
import gridUnit from '../mixins/gridUnit';

export type GridUnitProps = {
  size?: BreakpointValues<Size>,
  visible?: BreakpointValues<Visible>,
  children?: React.Node;
};

const GridUnitComponent: React.Component<GridUnitProps> = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['width', 'visible']
});

const GridUnit = styled(GridUnitComponent) `
  box-sizing: border-box;
  ${gridUnit}
`;

export default GridUnit;
