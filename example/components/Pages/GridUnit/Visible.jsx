import React from 'react';
import {Component, Property, Value} from '../../docs';

const visible = `
<Grid wrap>
  <Grid.Unit visible={false}><Box>never visible</Box></Grid.Unit>
  <Grid.Unit visible><Box>always visible</Box></Grid.Unit>
  <Grid.Unit visible={{tablet: false}}><Box>visible on mobile</Box></Grid.Unit>
  <Grid.Unit visible={{mobile: false, tablet: true, desktop: false}}><Box>visible on tablet</Box></Grid.Unit>
  <Grid.Unit visible={{mobile: false, desktop: true}}><Box>visible on desktop</Box></Grid.Unit>
</Grid>
`;

const Visible = () => (
  <Component name="Grid">
    <Property name="visible">
      <Value name="true" example={visible}/>
    </Property>
  </Component>
);

export default Visible;

