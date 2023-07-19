import { useState } from 'react';

import {
  basicsRouter,
  basicsRouterArray,
  pagesRouterArray,
} from '../../routes';

import { Link } from 'react-router-dom';

import {
  Collapse,
  Container,
  Dropdown,
  Nav,
  Navbar as NavbarReactBootstrap,
  NavDropdown,
} from 'react-bootstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarReactBootstrap bg="dark" variant="dark" expand="md">
      <Container fluid>
        <NavbarReactBootstrap.Brand>
          <Link to={basicsRouter.home.path} style={{ textDecoration: 'none' }}>
            {basicsRouter.home.name}
          </Link>
        </NavbarReactBootstrap.Brand>
        <NavbarReactBootstrap.Toggle onClick={toggle} />
        <Collapse in={isOpen}>
          <NavbarReactBootstrap.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Examples" id="collasible-nav-dropdown">
                {basicsRouterArray.map((route) => (
                  <Dropdown.Item key={`basicsArrayRouter-${route.name}`}>
                    <Link to={route.path} style={{ textDecoration: 'none' }}>
                      {route.name}
                    </Link>
                  </Dropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                {pagesRouterArray.map((route) => (
                  <Dropdown.Item key={`pagesArrayRouter-${route.name}`}>
                    <Link to={route.path} style={{ textDecoration: 'none' }}>
                      {route.name}
                    </Link>
                  </Dropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </NavbarReactBootstrap.Collapse>
        </Collapse>
      </Container>
    </NavbarReactBootstrap>
  );
};

export default Navbar;
