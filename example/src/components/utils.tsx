/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import {Spacing} from 'styled-components-spacing';

export const DEFAULT_BREAKPOINTS = {
  mobile: 0,
  tablet: 737,
  desktop: 1025,
};

export const CUSTOM_BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

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
  overflow: scroll;
`;

export const Text = styled.div<{align?: string}>`
  ${({align}) => (align && `text-align: ${align};`) || ''}
`;

const HEADING_SPACING = {
  1: {top: 4},
  2: {top: 3},
  3: {top: 2},
};

const HEADING_WEIGHT = {
  1: 400,
  2: 400,
  3: 400,
};

const StyledHeading = styled.h1<{size: keyof typeof HEADING_WEIGHT}>`
  ${({size}) => `font-weight: ${HEADING_WEIGHT[size]};`}
`;

const HEADING_COMPONENT: {[size in 1 | 2 | 3]: 'h1' | 'h2' | 'h3'} = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
};

export interface HeadingProps {
  size: keyof typeof HEADING_SPACING;
  spaced?: boolean;
  children?: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  size,
  spaced = true,
  children,
}) => {
  const spacing = HEADING_SPACING[size];
  const component = HEADING_COMPONENT[size];

  if (spaced) {
    return (
      <Spacing {...spacing}>
        <StyledHeading size={size} as={component}>
          {children}
        </StyledHeading>
      </Spacing>
    );
  }

  return (
    <StyledHeading size={size} as={component}>
      {children}
    </StyledHeading>
  );
};
