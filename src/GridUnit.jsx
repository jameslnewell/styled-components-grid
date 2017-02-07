import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

//TODO: fix issues with partial pixels

const widthMixin = ({width, theme}) => {

  if (width) {
    if (typeof width === 'object') {
      return Object.keys(width)
        .map(name => {
          const pct = Math.round(width[name] * 100); //TODO: support "min" and "max"
          return breakpoint(name, theme.breakpoints)`
            flex-basis: ${pct}%;
            max-width: ${pct}%;
          `;
        })
        ;
    } else {
      const pct = Math.round(width * 100); //TODO: support "min" and "max"
      return `
        flex-basis: ${pct}%
        max-wdith: ${pct}%
      `;
    }
  }

  return null;
};

const visibilityMixin = ({visible}) => {
  if (visible) {
    return ``;
  } else {
    return `display: none`;
  }
};

const GridUnit = styled.div`
  box-sizing: border-box;
  ${widthMixin}
  ${visibilityMixin}
`;

GridUnit.propTypes = {
  width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.object]),
  visible: React.PropTypes.bool
};

GridUnit.defaultProps = {
  width: 1,
  visible: true
};

export default GridUnit;
