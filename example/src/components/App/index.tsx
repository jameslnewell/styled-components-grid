import * as React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import {Grid} from '../../../../src';
import {Pages} from './Pages';
import {DEFAULT_BREAKPOINTS, CUSTOM_BREAKPOINTS} from '../utils';
import {GlobalStyle, Main, H1, Button, Instruction} from './index.style';

export const App = () => {
  const [breakpoints, setBreakpoints] = React.useState<
    DefaultTheme['breakpoints']
  >(DEFAULT_BREAKPOINTS);

  const handleToggleBreakpoints = () => {
    setBreakpoints(breakpoints =>
      breakpoints !== DEFAULT_BREAKPOINTS
        ? DEFAULT_BREAKPOINTS
        : CUSTOM_BREAKPOINTS,
    );
  };

  return (
    <ThemeProvider theme={{breakpoints}}>
      <>
        <GlobalStyle />
        <Main>
          <H1>styled-components-grid</H1>
          <Grid valign="center">
            <Grid.Unit size="max">
              <Button onClick={handleToggleBreakpoints}>
                {breakpoints === DEFAULT_BREAKPOINTS
                  ? 'Use custom breakpoints'
                  : 'Use default breakpoints'}
              </Button>
            </Grid.Unit>
            <Grid.Unit size="min">
              <Instruction>Try resizing the window. 👉</Instruction>
            </Grid.Unit>
          </Grid>
          <Pages />
        </Main>
      </>
    </ThemeProvider>
  );
};
