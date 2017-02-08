import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {styleSheet} from 'styled-components';
import Grid from 'styled-components-grid';

// styleSheet.reset();
const html = renderToStaticMarkup(
  <Grid>
    <Grid.Unit width={1/6}>Awesome!</Grid.Unit>
    <Grid.Unit width={1/3}>Amazing!</Grid.Unit>
    <Grid.Unit width={{mobile: 1, tablet: 1/2, desktop: 1/4}}>Out of this world!</Grid.Unit>
  </Grid>
);
const css = styleSheet.getCSS();

console.log(`HTML\n----------------------------------------------\n${html}\n`);
console.log(`CSS \n----------------------------------------------\n${css}\n`);