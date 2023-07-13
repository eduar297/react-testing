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
      <NavbarBrand href="/">React Testing</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Pages
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/test">
                <DropdownItem>Test</DropdownItem>
              </Link>
              <Link to="/page2">
                <DropdownItem>Page 2</DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </NavbarReactrap>
  );
};

export default Navbar;
