import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/logo.svg';

const HeaderBar = styled.nav`
  background: var(--dark);
  width: 100%;
  padding: 0.5rem 2rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: auto;
    width: 60px;
  }
`;

const NavLinks = styled.ul`
  a {
    text-decoration: none;
    color: var(--white);
    text-transform: capitalize;
    font-family: 'Open Sans';
    font-weight: 400;

    transition: 0.2s ease;

    &:hover {
      color: tomato;
    }
  }

  a + a {
    margin-left: 0.875rem;
  }
`;

const MenuBar = () => {
  return (
    <HeaderBar>
      <NavBar>
        <Link to="/">
          <Logo />
        </Link>

        <NavLinks>
          <Link to="/contato">Contato</Link>
          <Link to="/portfolio">Portfólio</Link>
          <Link to="/sobremim">Sobre mim</Link>
        </NavLinks>
      </NavBar>
    </HeaderBar>
  );
};

export default MenuBar;
