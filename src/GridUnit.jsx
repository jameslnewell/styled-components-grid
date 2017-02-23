import React from 'react';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';

//TODO: fix issues with partial pixels

const widthMixin = ({width, theme}) => map(width, w => {
  const pct = Math.round(w * 100); //TODO: support "min" and "max"
  return `
    flex-basis: ${pct}%;
    max-width: ${pct}%;
  `;
}, theme.breakpoints);

const visibilityMixin = ({visible, theme}) => map(visible, v => {
  if (v) {
    return 'display: inline-block;'; //TODO: maybe this shouldn't be inline block??
  } else {
    return 'display: none;';
  }
}, theme.breakpoints);

const OmitWidth = ({width, ...otherProps}) => <div {...otherProps}/>;

const GridUnit = styled(OmitWidth)`
  box-sizing: border-box;
  ${widthMixin}
  ${visibilityMixin}
`;

GridUnit.propTypes = {
  width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.object]),
  visible: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.object])
};

GridUnit.defaultProps = {
  width: 1,
  visible: true
};

export default GridUnit;
