import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import Grid, {grid} from 'styled-components-grid';
import breakpoint from 'styled-components-breakpoint';
import Navigation from './Navigation';
import Pages from './Pages';

injectGlobal`

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: "Avenir Next",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  
`;

const NavigationGridUnit = styled.div`
  display: flex;
  min-height: 100%;
  ${grid.unit('min')}
  ${breakpoint('tablet')`
    max-width: calc(300px);
  `}
`;

const PageGridUnit = styled.div`
  ${grid.unit('max')}
  ${breakpoint('tablet')`
    max-width: calc(100% - 300px);
  `}
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <NavigationGridUnit>
            <Navigation/>
          </NavigationGridUnit>
          <PageGridUnit>
            <Pages/>
          </PageGridUnit>
        </Grid>
      </div>
    );
  }
}
