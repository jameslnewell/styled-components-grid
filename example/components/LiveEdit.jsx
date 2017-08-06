import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import chroma from 'chroma-js';
import styled from 'styled-components';
import Grid, {grid} from 'styled-components-grid';
import {map} from 'styled-components-breakpoint';

const Box = styled.div`
  ${({height}) => `height: ${height};`}
`;

const StyledLiveEditor = styled(LiveEditor)`
  overflow: scroll;
`;

const StyledLiveError = styled(LiveError)`
  display: block;
  padding: 1em;
  color: white;
  background: red;
  font-size: 0.8em;
`;

const ColoredGrid = ({children, ...otherProps}) => {
  const colors = chroma.scale(['rgb(152,251,152)','rgb(58,97,58)']).colors(React.Children.count(children));
  return (
    <Grid {...otherProps}>
      {React.Children.map(children, (child, index) => React.cloneElement(child, {
        color: colors[index]
      }))}
    </Grid>
  );
};;

ColoredGrid.Unit = styled.div`

  //center the contents
  align-items: center;
  justify-content: center;
  
  //make the contents look pretty
  padding: 1em;
  font-weight: bold;
  background-color: ${({color}) => color || 'unset'};

  //override default styles so the grid keeps working e.g. for visible
  ${props => grid.unit(props)}

`;

export default ({code}) => (
  <LiveProvider scope={{Grid: ColoredGrid, Box}} code={code}>
    <StyledLiveEditor/>
    <StyledLiveError/>
    <LivePreview />
  </LiveProvider>
);

