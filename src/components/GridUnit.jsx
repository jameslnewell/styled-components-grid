import PropTypes from 'prop-types';
import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import gridUnit from '../mixins/gridUnit';

const GridUnitComponent = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['width', 'visible']
});

const GridUnit = styled(GridUnitComponent)`
  box-sizing: border-box;
  ${gridUnit}
`;

GridUnit.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

export default GridUnit;
