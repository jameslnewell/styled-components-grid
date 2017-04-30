import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ServerStyleSheet} from 'styled-components'
import Grid from 'styled-components-grid';

const sheet = new ServerStyleSheet();
const html = renderToStaticMarkup(sheet.collectStyles(
  <Grid>
    <Grid.Unit width={1/6}>Awesome!</Grid.Unit>
    <Grid.Unit width={1/3}>Amazing!</Grid.Unit>
    <Grid.Unit width={{mobile: 1, tablet: 1/2, desktop: 1/4}}>Out of this world!</Grid.Unit>
  </Grid>
));
const css = sheet.getStyleTags();

console.log(`HTML\n----------------------------------------------\n${html}\n`);
console.log(`CSS \n----------------------------------------------\n${css}\n`);