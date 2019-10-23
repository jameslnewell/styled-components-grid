import * as React from 'react';
import styled from 'styled-components';
import {NavLink, NavLinkProps} from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
import {Spacing, mb} from 'styled-components-spacing';
import {Grid} from '../../../src';

const Wrapper = styled.nav`
  flex-grow: 1;
  background-attachment: fixed;
  background-image: linear-gradient(
    to top,
    rgb(58, 97, 58) 0%,
    rgb(152, 251, 152) 100%
  );
`;

const Group = styled.div`
  margin: 1em 0;
  ${breakpoint('tablet')`
    margin: 0.5em 0;
  `}
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

  text-align: center;
  ${breakpoint('tablet')`
    text-align: left;
  `}

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

const activeClassName = 'active';

const ActiveLink: React.FC<NavLinkProps> = props => (
  <NavLink {...props} activeClassName={activeClassName} />
);

const Link = styled(ActiveLink).attrs({
  activeClassName,
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

const Nav = () => {
  return (
    <Wrapper>
      <Spacing paddingX={3} paddingY={{mobile: 3, tablet: 5}}>
        <Grid halign="justify-center">
          <Grid.Unit>
            <Group>
              <H1 to="/">styled-components-grid</H1>
            </Group>
          </Grid.Unit>
          <Grid.Unit size={{mobile: 'min', tablet: 1}}>
            <Group>
              <H2>Configuration</H2>
              <List>
                <ListItem>
                  <Link to="/configuration">Breakpoints</Link>
                </ListItem>
              </List>
            </Group>
          </Grid.Unit>
          <Grid.Unit size={{mobile: 'min', tablet: 1}}>
            <Group>
              <H2>Grid</H2>
              <List>
                <ListItem>
                  <Link to="/grid/halign">halign</Link>
                </ListItem>
                <ListItem>
                  <Link to="/grid/valign">valign</Link>
                </ListItem>
                <ListItem>
                  <Link to="/grid/wrap">wrap</Link>
                </ListItem>
                <ListItem>
                  <Link to="/grid/reverse">reverse</Link>
                </ListItem>
              </List>
            </Group>
          </Grid.Unit>
          <Grid.Unit size={{mobile: 'min', tablet: 1}}>
            <Group>
              <H2>GridUnit</H2>
              <List>
                <ListItem>
                  <Link to="/grid-unit/size">size</Link>
                </ListItem>
                <ListItem>
                  <Link to="/grid-unit/visible">visible</Link>
                </ListItem>
              </List>
            </Group>
          </Grid.Unit>
        </Grid>
      </Spacing>
    </Wrapper>
  );
};

export default Nav;
