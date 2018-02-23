import React from 'react';
import { Component, Property, Value } from '../../docs';

const valignTop = `
<Grid valign="top">
  <Grid.Unit size={0.5} style={{minHeight: '2em'}}>#1</Grid.Unit>
  <Grid.Unit size={0.5} style={{minHeight: '6em'}}>#2</Grid.Unit>
</Grid>
`;

const valignCenter = `
<Grid valign="center">
  <Grid.Unit size={0.5} style={{minHeight: '2em'}}>#1</Grid.Unit>
  <Grid.Unit size={0.5} style={{minHeight: '6em'}}>#2</Grid.Unit>
</Grid>
`;

const valignBottom = `
<Grid valign="bottom">
  <Grid.Unit size={0.5} style={{minHeight: '2em'}}>#1</Grid.Unit>
  <Grid.Unit size={0.5} style={{minHeight: '6em'}}>#2</Grid.Unit>
</Grid>
`;

const valignStretch = `
<Grid valign="stretch">
  <Grid.Unit size={0.5} style={{minHeight: '2em'}}>#1</Grid.Unit>
  <Grid.Unit size={0.5} style={{minHeight: '6em'}}>#2</Grid.Unit>
</Grid>
`;

const Valign = () => (
  <Component name="">
    <Property name="valign">
      <Value name="top" example={valignTop} />
      <Value name="center" example={valignCenter} />
      <Value name="bottom" example={valignBottom} />
      <Value name="stretch" example={valignStretch} />
    </Property>
  </Component>
);

export default Valign;
