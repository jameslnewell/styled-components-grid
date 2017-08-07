import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import Grid, {grid} from 'styled-components-grid';
import breakpoint from 'styled-components-breakpoint';
import Navigation from './Navigation';
import Pages from './Pages';
import Footer from './Footer';

/* eslint-disable no-unused-expressions */
injectGlobal`

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: "Avenir Next",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  
`;
/* eslint-enable no-unused-expressions */

const NavigationGridUnit = styled.div`
  display: flex;
  ${grid.unit('min')}
  ${breakpoint('tablet')`
    max-width: calc(300px);
    min-height: 100%;
  `}
`;

const BodyGridUnit = styled.div`
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
          <BodyGridUnit>
            <Grid>
              <Grid.Unit size="max">
                <Pages/>
              </Grid.Unit>
              <Grid.Unit size="min">
                <Footer/>
              </Grid.Unit>
            </Grid>
          </BodyGridUnit>
        </Grid>
      </div>
    );
  }
}
