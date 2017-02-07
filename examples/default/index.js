import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {styleSheet} from 'styled-components';
import Grid from 'styled-components-grid';

// styleSheet.reset();
const html = renderToStaticMarkup(
  <Grid>
    <Grid.Unit width={1/6}>Awesome!</Grid.Unit>
    <Grid.Unit width={1/3}>Amazing!</Grid.Unit>
    <Grid.Unit width={{tablet: 1, desktop: 1/2}}>Out of this world!</Grid.Unit>
  </Grid>
);
const css = styleSheet.getCSS();

console.log(`HTML\n----------------------------------------------\n${html}\n`);
console.log(`CSS \n----------------------------------------------\n${css}\n`);