import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import { ReactComponent as Logo } from '../assets/logo.svg';

const HeaderBar = styled.nav`
  background: var(--secondary-dark);
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

  //logo
  & > a {
    & path {
      animation: animateLogo 6s ease infinite alternate;
    }
  }

  @keyframes animateLogo {
    0% {
      stroke-width: 0;
      stroke-dasharray: 1 100;
      fill: transparent;
    }
    25% {
      stroke-width: 1;
      fill: transparent;
      stroke-dasharray: 100 0;
    }
    60%,
    100% {
      stroke-width: 0.3;
      fill: var(--secondary);
    }
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
      color: var(--secondary);
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
          {/* logo */}
          <svg width="50" height="50" viewBox="0 0 168 93" fill="none">
            <path
              id="Vector1"
              d="M19 0.5H0L23 92H45.5L62 22.5L79 92L87.5 67.5L71 0.5H53L35 74.5L19 0.5Z"
              stroke="white"
            />

            <path
              id="Vector2"
              d="M112.5 1L80.5 92.5H101L107.5 71.5L124 15.5L141 71.5L147.5 92.5H168L136 1H112.5Z"
              stroke="white"
            />

            <path
              id="Vector3"
              d="M133.5 55H114.5L110 71H138.5L133.5 55Z"
              stroke="white"
            />
          </svg>
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
