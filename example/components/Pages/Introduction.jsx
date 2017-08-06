import React from 'react';
import {Margin} from 'styled-components-spacing';
import {Code, CodeBlock, Heading} from '../utils';
import LiveEdit from '../LiveEdit';

const usage = `
/*
import React from 'react';
import Grid from 'styled-components-grid';
*/
<Grid>
  <Grid.Unit size={1/3}>This</Grid.Unit>
  <Grid.Unit size={1/3}>Grid</Grid.Unit>
  <Grid.Unit size={1/3}>is</Grid.Unit>
  <Grid.Unit size={{tablet: 1/2}} visible={{mobile: false, tablet: true}}>Freaking</Grid.Unit>
  <Grid.Unit size={{tablet: 1/2}}>Awesome!</Grid.Unit>
</Grid>

`;

const Introduction = () => (
  <div>
    <Heading size={1}>Introduction</Heading>

    <Code>styled-components-grid</Code> is a responsive grid built with <Code>flexbox</Code> and <Code>styled-components</Code> 💅.
    
    <Heading size={2}>Installation</Heading>
    <CodeBlock>
    yarn add styled-components styled-components-grid
    </CodeBlock>

    <Heading size={2}>Usage</Heading>
    <LiveEdit code={usage}/>

  </div>
);

export default Introduction;
