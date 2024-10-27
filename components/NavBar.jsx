'use  client';

import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

import User from './svg/User';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <User/>
        <Container>
          <h4>Forms で 性格診断 - "Okta CIC (Auth0) Forms TEST" </h4>
          <Collapse isOpen={isOpen} navbar>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
