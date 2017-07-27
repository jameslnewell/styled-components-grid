import React from 'react';
import {Code, CodeBlock} from '../utils';

const Introduction = () => (
  <div>
    <h1>Introduction</h1>

    <Code>styled-components-grid</Code> is a responsive grid built with <Code>styled-components</Code> 💅.

    It uses `flexbox` and has an optional `inline-block` fallback for legacy browsers.
    
    <h2>Installation</h2>
    <CodeBlock>
    yarn add styled-components styled-components-grid
    </CodeBlock>
    <h2>Configuration</h2>
    <h3>Static</h3>
    <h3>Theme</h3>
    <h2>Usage</h2>
  </div>
);

export default Introduction;
