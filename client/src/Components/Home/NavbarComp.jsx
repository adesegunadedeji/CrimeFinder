import './Navbar.css'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#FF04A" light expand="md">
        <NavbarBrand href="/">crimefinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem class="linkNav">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/crimes">CrimesList</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/map">Map</NavLink>
            </NavItem>
          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp
