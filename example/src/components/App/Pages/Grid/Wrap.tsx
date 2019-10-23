import * as React from 'react';
import {Component, Property, Value} from '../../../docs';

const wrap = `
<Grid>
  <Grid.Unit size={1}>#1</Grid.Unit>
  <Grid.Unit size={0.75}>#2</Grid.Unit>
  <Grid.Unit size={0.5}>#3</Grid.Unit>
  <Grid.Unit size={0.25}>#4</Grid.Unit>
</Grid>
`;

const noWrap = `
<Grid wrap={false}>
  <Grid.Unit size={1}>#1</Grid.Unit>
  <Grid.Unit size={0.75}>#2</Grid.Unit>
  <Grid.Unit size={0.5}>#3</Grid.Unit>
  <Grid.Unit size={0.25}>#4</Grid.Unit>
</Grid>
`;

const Wrap = () => (
  <Component name="">
    <Property name="wrap">
      <Value name="false" example={noWrap}>
        Sizes are kind of ignored in order to fit the units in.
      </Value>
      <Value name="true" example={wrap} />
    </Property>
  </Component>
);

export default Wrap;
