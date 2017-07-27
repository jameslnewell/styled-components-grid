import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import {NavLink} from 'react-router-dom'
import {Padding, mb} from 'styled-components-spacing';

const Wrapper = styled.nav`
  flex-grow: 1;
  background-attachment: fixed;
  background-image: linear-gradient(to top, rgb(58,97,58) 0%, rgb(152,251,152) 100%);
`;

const Group = styled.div`
  margin: 0.5em 0;
`;

const H1 = styled(NavLink)`
  ${mb(3)};
  display: block;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  text-shadow: 1px 1px 4px #3a613a;
  transition: 0.25s text-shadow;
  :hover {
    text-shadow: 1px 1px 6px #3a613a;
  }
`;

const H2 = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const List = styled.ul`
  margin-top: 0.2em;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-left: 0.25em;
`;

const activeClassName = 'active'

const ActiveLink = props => <NavLink {...props} activeClassName={activeClassName}/>;

const Link = styled(ActiveLink).attrs({
  activeClassName
})`
  display: inline-block;
  cursor: pointer;
  color: #444;
  line-height: 1.5;
  text-decoration: none;
  transition: 0.1s color;
  :hover {
    color: #fff;
  }
  &.${activeClassName} {
    font-weight: bold;
  }
`;

const Nav = ({onClick}) => {
  return (
    <Wrapper>
      <Padding horizontal={3} vertical={5}>
        <Grid>
          <Grid.Unit>
            <Group>
              <H1 to="/">styled-components-grid</H1>
            </Group>
          </Grid.Unit>
          <Grid.Unit width={{mobile: 1/2, tablet: 1}}>
            <Group>
              <H2>Grid</H2>
              <List>
                <ListItem><Link to="/grid/halign">halign</Link></ListItem>
                <ListItem><Link to="/grid/valign">valign</Link></ListItem>
                <ListItem><Link to="/grid/wrap">wrap</Link></ListItem>
                <ListItem><Link to="/grid/reverse">reverse</Link></ListItem>
              </List>
              </Group>
          </Grid.Unit> 
          <Grid.Unit width={{mobile: 1/2, tablet: 1}}>
            <Group>
              <H2>GridUnit</H2>
              <List>
                <ListItem><Link to="/grid-unit/width">width</Link></ListItem>
                <ListItem><Link to="/grid-unit/visible">visible</Link></ListItem>
              </List>
            </Group>
          </Grid.Unit>
        </Grid>
      </Padding>
    </Wrapper>
  );
};

export default Nav;
