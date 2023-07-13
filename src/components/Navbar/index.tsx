import { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar as NavbarReactrap,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarReactrap color="dark" dark expand="md">
      <NavbarBrand>
        <Link to="/" style={{ textDecoration: 'none' }}>
          React Testing
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Pages
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/test" style={{ textDecoration: 'none' }}>
                <DropdownItem>Test</DropdownItem>
              </Link>
              <Link to="/pokemon-example" style={{ textDecoration: 'none' }}>
                <DropdownItem>Pokemon example</DropdownItem>
              </Link>
              <Link to="/form-example" style={{ textDecoration: 'none' }}>
                <DropdownItem>Form example</DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </NavbarReactrap>
  );
};

export default Navbar;
