import React from 'react';
import {Component, Property, Value} from '../../docs';

const wrap = `
<Grid>
  <Grid.Unit width={1}>#1</Grid.Unit>
  <Grid.Unit width={0.75}>#2</Grid.Unit>
  <Grid.Unit width={0.5}>#3</Grid.Unit>
  <Grid.Unit width={0.25}>#4</Grid.Unit>
</Grid>
`;

const noWrap = `
<Grid wrap={false}>
  <Grid.Unit width={1}>#1</Grid.Unit>
  <Grid.Unit width={0.75}>#2</Grid.Unit>
  <Grid.Unit width={0.5}>#3</Grid.Unit>
  <Grid.Unit width={0.25}>#4</Grid.Unit>
</Grid>
`;

const Wrap = () => (
  <Component name="Grid">
    <Property name="wrap">
      <Value name="true" example={wrap}/>
      <Value name="false" example={noWrap}/>
    </Property>
  </Component>
);

export default Wrap;

