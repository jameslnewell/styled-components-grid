import * as React from 'react';
import {Spacing} from 'styled-components-spacing';

import Introduction from './Introduction';
import Grid from './Grid';
import GridUnit from './GridUnit';
import Size from './GridUnit/Size';

export const Pages = () => (
  <Spacing paddingY={{mobile: 3, tablet: 5}}>
    <Introduction />
    <Grid />
    <GridUnit />
    <Size />
  </Spacing>
);
