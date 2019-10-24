import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {Pages} from './Pages';
import {DEFAULT_BREAKPOINTS, CUSTOM_BREAKPOINTS} from '../utils';
import {GlobalStyle, Main, H1} from './index.style';

export const App = () => {
  return (
    <ThemeProvider
      theme={{breakpoints: {...DEFAULT_BREAKPOINTS, ...CUSTOM_BREAKPOINTS}}}
    >
      <>
        <GlobalStyle />
        <Main>
          <H1>styled-components-grid</H1>
          <Pages />
        </Main>
      </>
    </ThemeProvider>
  );
};
