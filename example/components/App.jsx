import React from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Grid, { grid } from 'styled-components-grid';
import breakpoint, { createStatic } from 'styled-components-breakpoint';
import Navigation from './Navigation';
import Pages from './Pages';
import { DEFAULT_BREAKPOINTS, CUSTOM_BREAKPOINTS } from './utils';

const STATIC_BREAKPOINTS = createStatic();

/* eslint-disable no-unused-expressions */
injectGlobal`

  body {

    margin: auto;
    padding: 0 1em;
    min-width: 500px;
    max-width: 800px;

    color: #444;
    font-size: 0.9em;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

    ${STATIC_BREAKPOINTS.tablet`
      font-size: 1em;
    `}
    
    ${STATIC_BREAKPOINTS.desktop`
      font-size: 1.1em;
    `}
    
  }

`;
/* eslint-enable no-unused-expressions */

const Main = styled.main`
  padding-bottom: 1em;
`;

const H1 = styled.h1`
  margin: 1em 0;
`;

const H2 = styled.h2`
  margin: 1em 0;
`;

const P = styled.p`
  margin: 1em 0;
`;

const Button = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 3px;
`;

const Instruction = styled.blockquote`
  margin: 0;
  font-size: 0.9em;
  font-weight: bold;
  text-align: right;
`;

export default class App extends React.Component {

  state = {
    breakpoints: DEFAULT_BREAKPOINTS
  };

  handleToggleBreakpoints = () => {
    this.setState(state => ({
      breakpoints: state.breakpoints !== DEFAULT_BREAKPOINTS ? DEFAULT_BREAKPOINTS : CUSTOM_BREAKPOINTS
    }));
  }

  render() {
    const { breakpoints } = this.state;
    return (
      <ThemeProvider theme={{ breakpoints }}>
        <Main>
          <H1>styled-components-grid</H1>
          {/* <Grid valign="center">
            <Grid.Unit size="max">
              <Button onClick={this.handleToggleBreakpoints}>
                {breakpoints === DEFAULT_BREAKPOINTS ? 'Use custom breakpoints' : 'Use default breakpoints'}
              </Button>
            </Grid.Unit>
            <Grid.Unit size="min">
              <Instruction>Try resizing the window. 👉</Instruction>
            </Grid.Unit>
          </Grid> */}
          <Pages />
        </Main>
      </ThemeProvider>
    );
  }
}
