import {breakpoint} from 'styled-components-breakpoint';
import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {

    margin: auto;
    padding: 0 1em;
    min-width: 500px;
    max-width: 800px;

    color: #444;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 0.9em;

    ${breakpoint('tablet')`
      font-size: 1em;
    `}
    
    ${breakpoint('desktop')`
      font-size: 1.1em;
    `}
    
  }
`;

export const Main = styled.main`
  padding-bottom: 1em;
`;

export const H1 = styled.h1`
  margin: 1em 0;
`;

export const Button = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 3px;
`;

export const Instruction = styled.blockquote`
  margin: 0;
  font-size: 0.9em;
  font-weight: bold;
  text-align: right;
`;
