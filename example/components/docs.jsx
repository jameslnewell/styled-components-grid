import React from 'react';
import styled from 'styled-components';
import {Margin} from 'styled-components-spacing';
import LiveEdit from './LiveEdit';

export const Component = ({name, children}) => (
  <Margin bottom={2}>
    <Margin bottom={1}>
      <h1>{name}</h1>
    </Margin>
    {children}
  </Margin>
);

export const Property = ({name, children}) => (
  <div>
    <Margin bottom={1}>
      <h2>{name}</h2>
    </Margin>
    {children}
  </div>
);

export const Value = ({name, example}) => (
  <div>
    <Margin bottom={4}>
      <h3>{name}</h3>
      <LiveEdit code={example}/>
    </Margin>
  </div>
);
