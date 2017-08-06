import React from 'react';
import {Margin} from 'styled-components-spacing';
import {Code, CodeBlock, Heading} from '../utils';
import LiveEdit from '../LiveEdit';

const configureTheme = `
import React from 'react';
import {ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

<ThemeProvider theme={theme}>
  <Grid>
    <Grid.Unit size={1/6}>Awesome!</Grid.Unit>
    <Grid.Unit size={1/3}>Amazing!</Grid.Unit>
    <Grid.Unit size={{lg: 1/5}}>Out of this world!</Grid.Unit>
  </Grid>
</ThemeProvider>
`;

const Configuration = () => (
  <div>

    <Heading size={1}>Configuration</Heading>
    <Heading size={2}>Breakpoints</Heading>
    
    You can customise the default breakpoints. If you would like to use the same breakpoints 
    as <a href="https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints">Bootstrap</a>, you 
    can do so like this:

    <Heading size={3}>Using a theme</Heading>
    <CodeBlock>{configureTheme}</CodeBlock> 

  </div>
);

export default Configuration;
