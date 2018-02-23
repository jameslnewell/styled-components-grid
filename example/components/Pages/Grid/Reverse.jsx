import React from 'react';
import { Component, Property, Value } from '../../docs';

const reverse = `
<Grid reverse>
  <Grid.Unit size={0.25}>#1</Grid.Unit>
  <Grid.Unit size={0.25}>#2</Grid.Unit>
  <Grid.Unit size={0.25}>#3</Grid.Unit>
  <Grid.Unit size={0.25}>#4</Grid.Unit>
</Grid>
`;

const normal = `
<Grid>
  <Grid.Unit size={0.25}>#1</Grid.Unit>
  <Grid.Unit size={0.25}>#2</Grid.Unit>
  <Grid.Unit size={0.25}>#3</Grid.Unit>
  <Grid.Unit size={0.25}>#4</Grid.Unit>
</Grid>
`;

const Reverse = () => (
  <Component name="">
    <Property name="reverse">
      <Value name="false" example={normal} />
      <Value name="true" example={reverse} />
    </Property>
  </Component>
);

export default Reverse;

