import {css} from 'styled-components';
import g from './grid';
import gu from './gridUnit';

function grid(opts) {
  return css`
    ${props => g({...opts, ...props})};
  `;
}

function gridUnit(opts) {
return css`
  ${props => gu({...opts, ...props})};
`;
}

grid.unit = gridUnit;

export default grid;