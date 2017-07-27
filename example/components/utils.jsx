import React from 'react';
import styled from 'styled-components';

const code = `
  color: #24292e;
  background-color: #efefef;
`;

export const Code = styled.code`
  ${code}
  display: inline-block;
  padding: 0.5em;
`;

export const CodeBlock = styled.code`
  ${code}
  display: block;
  padding: 1em;
`;
