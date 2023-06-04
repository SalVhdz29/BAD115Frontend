import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Sistema Administrativo BAD-2023_G13<SourceLink></SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
