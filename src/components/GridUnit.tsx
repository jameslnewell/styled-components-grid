import * as React from 'react';
import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import {GridUnitOptions, unit} from '../mixins/unit';

export interface GridUnitProps extends GridUnitOptions {
  children?: React.ReactNode;
}

const GridUnitComponent: React.ComponentType = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['size'],
});

export const GridUnit = styled(GridUnitComponent)<GridUnitProps>`
  box-sizing: border-box;
  ${unit}
`;
