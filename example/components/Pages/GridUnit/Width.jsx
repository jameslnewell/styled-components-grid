import React from 'react';
import {Component, Property, Value} from '../../docs';

const width = `
<Grid wrap>
  <Grid.Unit visible><Box>#1</Box></Grid.Unit>
  <Grid.Unit width={0.25}><Box>#2</Box></Grid.Unit>
  <Grid.Unit width={0.25}><Box>#3</Box></Grid.Unit>
  <Grid.Unit width={0.25}><Box>#4</Box></Grid.Unit>
</Grid>
`;

const Width = () => (
  <Component name="Grid">
    <Property name="width">
      <Value name="x" example={width}/>
    </Property>
  </Component>
);

export default Width;

