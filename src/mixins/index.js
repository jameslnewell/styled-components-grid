import {css} from 'styled-components';
import g from './grid';
import gu from './gridUnit';

function grid(opts) {
  return css`
    ${({theme}) => g({theme, ...opts})};
  `;
}

function gridUnit(opts) {
  return css`
    ${({theme}) => gu({theme, ...opts})};
  `;
}

grid.unit = gridUnit;

export default grid;