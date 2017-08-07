import React from 'react';
import {Padding} from 'styled-components-spacing';
import {Text} from './utils';

const Footer = () => (
  <Padding all={2}>
    <Text align="center">
      <a 
        href="https://github.com/jameslnewell/styled-components-grid" 
        className="github-button" 
        data-size="large" 
        data-show-count="true" 
        aria-label="Star jameslnewell/styled-components-grid on GitHub"
      >Star</a>
      <script async defer src="https://buttons.github.io/buttons.js"/>
    </Text>
  </Padding>
);

export default Footer;