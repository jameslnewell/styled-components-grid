import React from 'react';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';

const wrapMixin = ({wrap, theme}) => map(wrap, w => `flex-wrap: ${w && 'wrap' || 'nowrap'};`, theme.breakpoints);

const flexDirectionMixin = ({reverse, theme}) => map(reverse, r => `flex-direction: ${r && 'row-reverse' || 'row'};`, theme.breakpoints);

const justifyContentMixin = ({horizontalAlign, reverse, theme}) => map(horizontalAlign, alignment => {
  let rule = '';
  switch (alignment) {

    default:
    case 'left':
      if (reverse) {
        rule = 'flex-end';
      } else {
        rule = 'flex-start';
      }
      break;

    case 'right':
      if (reverse) {
        rule = 'flex-start';
      } else {
        rule = 'flex-end';
      }
      break;

    case 'center':
      rule = 'center';
      break;

    case 'justify-center':
      rule = 'space-around';
      break;

    case 'justify':
      rule = 'space-between';
      break;

  }
  return `justify-content: ${rule};`
}, theme.breakpoints);

const alignItemsMixin = ({verticalAlign, theme}) => map(verticalAlign, alignment => {
  let rule = '';
  switch (alignment) {

    case 'top':
      rule = 'flex-start';
      break;

    case 'bottom':
      rule = 'flex-end';
      break;

    case 'center':
      rule = 'center';
      break;

    default:
    case 'stretch':
      rule = 'stretch';
      break;

  }
  return `align-items: ${rule};`
}, theme.breakpoints);

const Grid = styled.div`
  display: flex;
  ${wrapMixin}
  ${flexDirectionMixin}
  ${justifyContentMixin}
  ${alignItemsMixin}
`;

Grid.propTypes = {
  wrap: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.object]),
  reverse: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.object]),
  horizontalAlign: React.PropTypes.oneOfType([React.PropTypes.oneOf(['left', 'right', 'center', 'justify-center', 'justify']), React.PropTypes.object]),
  verticalAlign: React.PropTypes.oneOfType([React.PropTypes.oneOf(['top', 'bototm', 'center', 'stretch']), React.PropTypes.object])
};

Grid.defaultProps = {
  wrap: true,
  reverse: false,
  horizontalAlign: 'left',
  verticalAlign: 'stretch'
};

export default Grid;
