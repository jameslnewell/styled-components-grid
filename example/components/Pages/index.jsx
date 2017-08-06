import React from 'react';
import {Route} from 'react-router-dom';
import {Padding} from 'styled-components-spacing';

import Introduction from './Introduction';
import Configuration from './Configuration';
import Grid from './Grid';
import Halign from './Grid/Halign';
import Valign from './Grid/Valign';
import Wrap from './Grid/Wrap';
import Reverse from './Grid/Reverse';
import GridUnit from './GridUnit';
import Size from './GridUnit/Size';
import Visible from './GridUnit/Visible';

const Pages = () => (
  <Padding horizontal={3} vertical={{mobile: 3, tablet: 5}}>
    <Route exact path="/" component={Introduction}/>
    <Route exact path="/configuration" component={Configuration}/>
    <Route exact path="/grid" component={Grid}/>
    <Route exact path="/grid/halign" component={Halign}/> 
    <Route exact path="/grid/valign" component={Valign}/> 
    <Route exact path="/grid/wrap" component={Wrap}/> 
    <Route exact path="/grid/reverse" component={Reverse}/> 
    <Route exact path="/grid-unit" component={GridUnit}/>
    <Route exact path="/grid-unit/size" component={Size}/>
    <Route exact path="/grid-unit/visible" component={Visible}/>
  </Padding>
);

export default Pages;

