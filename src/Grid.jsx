import PropTypes from 'prop-types';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

const GridComponent = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['wrap', 'reverse', 'horizontalAlign', 'verticalAlign']
});

const wrapMixin = ({wrap, reverse, theme}) => map(wrap, (value = true) => {
  if (value && reverse) {
    return 'flex-wrap: wrap-reverse;';
  } else if (value) {
    return 'flex-wrap: wrap;';
  } else {
    return 'flex-wrap: wrap;';
  }
}, theme.breakpoints);

const flexDirectionMixin = ({reverse, theme}) => map(reverse, value => `flex-direction: ${value && 'row-reverse' || 'row'};`, theme.breakpoints);

const justifyContentMixin = ({horizontalAlign, reverse, theme}) => map(horizontalAlign, value => {
  let rule = '';
  switch (value) {

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

const alignItemsMixin = ({verticalAlign, theme}) => map(verticalAlign, value => {
  let rule = '';
  switch (value) {

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

const Grid = styled(GridComponent)`
  display: flex;
  ${wrapMixin}
  ${flexDirectionMixin}
  ${justifyContentMixin}
  ${alignItemsMixin}
`;

Grid.propTypes = {
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  reverse: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  horizontalAlign: PropTypes.oneOfType([PropTypes.oneOf(['left', 'right', 'center', 'justify-center', 'justify']), PropTypes.object]),
  verticalAlign: PropTypes.oneOfType([PropTypes.oneOf(['top', 'bototm', 'center', 'stretch']), PropTypes.object])
};

Grid.defaultProps = {
  wrap: true,
  reverse: false,
  horizontalAlign: 'left',
  verticalAlign: 'stretch'
};

export default Grid;
