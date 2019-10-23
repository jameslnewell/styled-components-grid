import * as React from 'react';

import styled, {StyledComponent, DefaultTheme} from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import {GridOptions, grid} from '../mixins/grid';
import {GridUnit} from './GridUnit';

export interface GridStatic {
  Unit: typeof GridUnit;
}

export interface GridProps extends GridOptions {
  children?: React.ReactNode;
}

const GridComponent: React.ComponentType = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['halign', 'valign', 'reverse', 'wrap'],
});

export const Grid = styled(GridComponent)<GridProps>`
  display: flex;
  ${grid}
` as StyledComponent<typeof GridComponent, DefaultTheme, GridProps, never> &
  GridStatic;

Grid.Unit = GridUnit;
