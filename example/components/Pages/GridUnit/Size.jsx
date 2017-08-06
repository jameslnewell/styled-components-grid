import React from 'react';
import {Component, Property, Value} from '../../docs';

const size = `
<Grid wrap>
  <Grid.Unit><Box>#1</Box></Grid.Unit>
  <Grid.Unit size={0.5}><Box>#2</Box></Grid.Unit>
  <Grid.Unit size={0.25}><Box>#3</Box></Grid.Unit>
  <Grid.Unit size={0.25}><Box>#4</Box></Grid.Unit>
</Grid>
`;

const Size = () => (
  <Component name="Grid">
    <Property name="size">
      <Value name="" example={size}/>
    </Property>
  </Component>
);

export default Size;

