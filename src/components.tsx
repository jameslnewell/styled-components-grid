import * as React from 'react';
import styled from 'styled-components';
import {ThemedBreakpointName} from 'styled-components-breakpoint';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import {GridUnitOptions} from './createGridUnit/types';
import {GridOptions} from './createGrid/types';
import {grid, gridUnit} from './mixins';

const GridComponent: React.ComponentType = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['halign', 'valign', 'reverse', 'wrap'],
});

export interface GridProps extends GridOptions<ThemedBreakpointName> {
  children?: React.ReactNode;
}

export const Grid = styled(GridComponent)<GridProps>`
  display: flex;
  ${grid}
`;

const GridUnitComponent: React.ComponentType = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['size'],
});

export interface GridUnitProps extends GridUnitOptions<ThemedBreakpointName> {
  children?: React.ReactNode;
}

export const GridUnit = styled(GridUnitComponent)<GridUnitProps>`
  ${gridUnit}
`;
