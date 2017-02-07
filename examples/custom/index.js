import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {styleSheet, ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';

const theme = {
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200
  }
};
// styleSheet.reset();
const html = renderToStaticMarkup(
  <ThemeProvider theme={theme}>
    <Grid>
      <Grid.Unit width={1/6}>Awesome!</Grid.Unit>
      <Grid.Unit width={1/3}>Amazing!</Grid.Unit>
      <Grid.Unit width={{sm: 1, lg: 1/2}}>Out of this world!</Grid.Unit>
    </Grid>
  </ThemeProvider>
);
const css = styleSheet.getCSS();

console.log(`HTML\n----------------------------------------------\n${html}\n`);
console.log(`CSS \n----------------------------------------------\n${css}\n`);