import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {map} from 'styled-components-breakpoint';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

const GridUnitComponent = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['width', 'visible']
});

//TODO: fix issues with partial pixels

const widthMixin = ({width, theme}) => map(width, (value = 1) => {
  switch (value) {

    case 'min':
      return `
        flex-grow: 0;
        flex-basis: auto;
        width: auto;
        max-width: none;
      `;

    case 'max':
      return `
        flex-grow: 1;
        flex-basis: auto;
        width: auto;
        max-width: none;
      `;

    default:
      const pct = Math.round(value * 100);
      return `
        flex-basis: ${pct}%;
        max-width: ${pct}%;
      `;

  }
}, theme.breakpoints);

const visibilityMixin = ({visible, theme}) => map(visible, (value = true) => {
  if (value) {
    return 'display: inline-block;'; //TODO: maybe this shouldn't be inline block??
  } else {
    return 'display: none;';
  }
}, theme.breakpoints);

const GridUnit = styled(GridUnitComponent)`
  box-sizing: border-box;
  ${widthMixin}
  ${visibilityMixin}
`;

GridUnit.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

GridUnit.defaultProps = {
  width: 1,
  visible: true
};

export default GridUnit;
