import React from 'react';
import {Padding} from 'styled-components-spacing';
import {Text} from './utils';

export default () => (
  <Padding all={2}>
    <Text align="center">
      <a 
        href="https://github.com/jameslnewell/styled-components-grid" 
        className="github-button" 
        data-size="large" 
        data-show-count="true" 
        aria-label="Star jameslnewell/styled-components-grid on GitHub"
      >Star</a>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </Text>
  </Padding>
)