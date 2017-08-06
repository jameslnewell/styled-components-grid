import React from 'react';
import styled from 'styled-components';
import {Margin} from 'styled-components-spacing';

const code = `
  color: #24292e;
  background-color: #efefef;
  border-radius: 2px;
`;

export const Code = styled.code`
  ${code}
  display: inline-block;
  padding: 0.5em;
  font-weight: 600;
`;

export const CodeBlock = styled.pre`
  ${code}
  display: block;
  padding: 1em;
`;

export const Text = styled.div`
  ${({align}) => align && `text-align: ${align};` || ''}
`;

const HEADING_SPACING = {
  1: {top: 4},
  2: {top: 3},
  3: {top: 2}
};

const HEADING_WEIGHT = {
  1: 600,
  2: 500,
  3: 400
};

const StyledHeading = styled.h1`
  ${({size}) => `font-weight: ${HEADING_WEIGHT[size]};`}
`;

const HEADING_COMPONENT = {
  1: StyledHeading.withComponent('h1'),
  2: StyledHeading.withComponent('h2'),
  3: StyledHeading.withComponent('h3')
}

export const Heading = ({size, spaced = true, children}) => {
  const spacing = HEADING_SPACING[size];
  const Component = HEADING_COMPONENT[size];

  if (spaced) {
    return (
      <Margin {...spacing}>
        <Component size={size}>{children}</Component>
      </Margin>
    )
  }

  return (
    <Component>{children}</Component>
  );
};
