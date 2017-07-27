import PropTypes from 'prop-types';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import grid from '../mixins/grid';

const GridComponent = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['halign', 'valign', 'wrap', 'reverse', 'horizontalAlign', 'verticalAlign']
});

const Grid = styled(GridComponent)`
  display: flex;
  ${grid}
`;

Grid.propTypes = {
  halign: PropTypes.oneOfType([PropTypes.oneOf(['left', 'right', 'center', 'justify-center', 'justify']), PropTypes.object]),
  valign: PropTypes.oneOfType([PropTypes.oneOf(['top', 'bottom', 'center', 'stretch']), PropTypes.object]),
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  reverse: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  horizontalAlign: PropTypes.oneOfType([PropTypes.oneOf(['left', 'right', 'center', 'justify-center', 'justify']), PropTypes.object]),
  verticalAlign: PropTypes.oneOfType([PropTypes.oneOf(['top', 'bottom', 'center', 'stretch']), PropTypes.object])
};

export default Grid;
