import React from 'react';
import {Component, Property, Value} from '../../docs';

const reverse = `
<Grid reverse>
  <Grid.Unit width={0.25}>#1</Grid.Unit>
  <Grid.Unit width={0.25}>#2</Grid.Unit>
  <Grid.Unit width={0.25}>#3</Grid.Unit>
  <Grid.Unit width={0.25}>#4</Grid.Unit>
</Grid>
`;

const normal = `
<Grid>
  <Grid.Unit width={0.25}>#1</Grid.Unit>
  <Grid.Unit width={0.25}>#2</Grid.Unit>
  <Grid.Unit width={0.25}>#3</Grid.Unit>
  <Grid.Unit width={0.25}>#4</Grid.Unit>
</Grid>
`;

const Reverse = () => (
  <Component name="Grid">
    <Property name="reverse">
      <Value name="true" example={reverse}/>
      <Value name="false" example={normal}/>
    </Property>
  </Component>
);

export default Reverse;

