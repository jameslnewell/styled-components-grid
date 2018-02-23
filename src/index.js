import grid from './mixins/grid';
import gridUnit from './mixins/gridUnit';
import Grid from './components/Grid';
import GridUnit from './components/GridUnit';

grid.unit = gridUnit;
Grid.Unit = GridUnit;

export { grid };
export default Grid;
