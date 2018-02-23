import React from 'react';
import { Route } from 'react-router-dom';
import { Padding } from 'styled-components-spacing';

import Introduction from './Introduction';
import Grid from './Grid';
import GridUnit from './GridUnit';
import Size from './GridUnit/Size';
import Visible from './GridUnit/Visible';

const Pages = () => (
  <Padding vertical={{ mobile: 3, tablet: 5 }}>
    <Introduction />
    <Grid />
    <GridUnit />
    <Size />
    <Visible />
  </Padding>
);

export default Pages;

