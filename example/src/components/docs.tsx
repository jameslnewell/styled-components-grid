/* eslint-disable react/prop-types */
import * as React from 'react';
import {Spacing} from 'styled-components-spacing';
import LiveEdit from './LiveEdit';

export interface ComponentProps {
  name: string;
  children?: React.ReactNode;
}
export const Component: React.FC<ComponentProps> = ({name, children}) => (
  <Spacing marginBottom={2}>
    <Spacing marginBottom={1}>
      <h2>{name}</h2>
    </Spacing>
    {children}
  </Spacing>
);

export interface PropertyProps {
  name: string;
  children?: React.ReactNode;
}

export const Property: React.FC<PropertyProps> = ({name, children}) => (
  <div>
    <Spacing marginBottom={1}>
      <h3>{name}</h3>
    </Spacing>
    {children}
  </div>
);

export interface ValueProps {
  name: string;
  example: string;
  children?: React.ReactNode;
}

export const Value: React.FC<ValueProps> = ({name, example, children}) => (
  <div>
    <Spacing marginBottom={4}>
      <h4>{name}</h4>
      {children && <Spacing marginBottom={2}>{children}</Spacing>}
      <LiveEdit code={example} />
    </Spacing>
  </div>
);
