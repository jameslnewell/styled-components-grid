import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ColoredGrid } from '../LiveEdit';
import { DEFAULT_BREAKPOINTS, CUSTOM_BREAKPOINTS, Code, CodeBlock, Heading } from '../utils';

export default function Introduction() {
  return (
    <div>

      <Code>styled-components-grid</Code> is a responsive grid built with <Code>flexbox</Code> and <Code>styled-components</Code> 💅.

      <Heading size={2}>Installation</Heading>
      <CodeBlock>
        yarn add styled-components styled-components-grid
      </CodeBlock>

      <Heading size={2}>Usage</Heading>
      <Heading size={3}>Usage with the default breakpoints</Heading>

      <CodeBlock>
        {`
import React from 'react';
import Grid from 'styled-components-grid';

<Grid>
  <Grid.Unit size={1/2}>A</Grid.Unit>
  <Grid.Unit size={{mobile: 1/2, tablet: 1/2, desktop: 1/8}}>B</Grid.Unit>
</Grid>
`}
      </CodeBlock>

      <ThemeProvider theme={{ breakpoints: DEFAULT_BREAKPOINTS }}>
        <ColoredGrid>
          <ColoredGrid.Unit size={1 / 2}>A</ColoredGrid.Unit>
          <ColoredGrid.Unit size={{ mobile: 1 / 2, tablet: 1 / 4, desktop: 1 / 8 }}>B</ColoredGrid.Unit>
        </ColoredGrid>
      </ThemeProvider>

      <Heading size={3}>Usage with custom breakpoints</Heading>

      You can customise the default breakpoints. If you would like to use the same breakpoints
      as <a href="https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints">Bootstrap</a>, you
      can do so like this:

      <CodeBlock>
        {`
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
    <Grid.Unit size={1/2}>A</Grid.Unit>
    <Grid.Unit size={{xs: 1/2, md: 1/4, xl: 1/8}}>B</Grid.Unit>
  </Grid>
</ThemeProvider>
`}
      </CodeBlock>
      <ThemeProvider theme={{ breakpoints: CUSTOM_BREAKPOINTS }}>
        <ColoredGrid>
          <ColoredGrid.Unit size={1 / 2}>A</ColoredGrid.Unit>
          <ColoredGrid.Unit size={{ xs: 1 / 2, md: 1 / 4, xl: 1 / 8 }}>B</ColoredGrid.Unit>
        </ColoredGrid>
      </ThemeProvider>

    </div>
  );
}
