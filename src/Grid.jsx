import React from 'react';
import styled from 'styled-components';

const flexWrap = wrap => wrap && 'wrap' || 'nowrap'; //TODO: support breakpoints
const flexDirection = reverse => reverse && 'row-reverse' || 'row'; //TODO: support breakpoints

const justifyContent = (alignment, reverse) => { //TODO: support breakpoints
  switch (alignment) {

    default:
    case 'left':
      if (reverse) {
        return 'flex-end';
      } else {
        return 'flex-start';
      }

    case 'right':
      if (reverse) {
        return 'flex-start';
      } else {
        return 'flex-end';
      }

    case 'center':
      return 'center';

    case 'justify-center':
      return 'space-around';

    case 'justify':
      return 'space-between';

  }
};

const alignItems = (alignment) => { //TODO: support breakpoints
  switch (alignment) {

    case 'top':
      return 'flex-start';

    case 'bottom':
      return 'flex-end';

    case 'center':
      return 'center';

    default:
    case 'stretch':
      return 'stretch';

  }
};

const Grid = styled.div`
  display: flex;
  flex-wrap: ${({wrap}) => flexWrap(wrap)};
  flex-direction: ${({reverse}) => flexDirection(reverse)};
  justify-content: ${({horizontalAlign, reverse}) => justifyContent(horizontalAlign, reverse)};
  align-items: ${({verticalAlign}) => alignItems(verticalAlign)};
`;

Grid.propTypes = {
  wrap: React.PropTypes.bool,
  reverse: React.PropTypes.bool,
  horizontalAlign: React.PropTypes.oneOf(['left', 'right', 'center', 'justify-center', 'justify']),
  verticalAlign: React.PropTypes.oneOf(['top', 'bototm', 'center', 'stretch']),
};

Grid.defaultProps = {
  wrap: true,
  reverse: false,
  horizontalAlign: 'left',
  verticalAlign: 'stretch'
};

export default Grid;
