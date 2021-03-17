import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import { ReactComponent as Logo } from '../assets/logo.svg';

const HeaderBar = styled.nav`
  background: var(--secondary-dark);
  width: 100%;
  padding: 0.5rem 2rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  position: relative;
  z-index: 999;
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
      stroke: var(--secondary);
    }
  }

  //logo animation
  @keyframes animateLogo {
    0% {
      stroke-width: 0.1;
      stroke-dasharray: 1 100;
      fill: transparent;
    }
    25% {
      stroke-width: 0.5;
      fill: transparent;
      stroke-dasharray: 100 1;
    }
    60%,
    100% {
      stroke-width: 1;
      stroke: var(--secondary);
    }
  }
`;

const NavLinks = styled.ul`
  a {
    text-decoration: none;
    color: var(--white);
    text-transform: lowercase;

    font-weight: 300;

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

          <svg width="50" height="35" viewBox="0 0 50 35" fill="none">
            <path
              d="M39.3962 21.9631H34.6686L33.0928 27.5186H41.0522L39.3962 21.9631Z"
              fill="none"
            />
            <path
              d="M28.0449 21.0817L29.327 34.6233L37.2329 9.14262L44.4712 34.6233H50L39.6902 0.515503H34.4552L28.0449 21.0817Z"
              fill="none"
            />
            <path
              d="M6.65062 0.515503H0L5.47541 17.0486L11.5117 34.6767H15.4914L20.5929 15.7398L25.0168 34.6767H28.7125L27.3504 20.9481L25.0168 9.35629L23.2371 0.515503H18.4562L12.8205 19.8264L6.65062 0.515503Z"
              fill="none"
            />
          </svg>
        </Link>

        <NavLinks>
          <Link to="/sobremim">Sobre mim</Link>

          <Link to="/portfolio">Portfólio</Link>
          <Link to="/contato">Contato</Link>
        </NavLinks>
      </NavBar>
    </HeaderBar>
  );
};

export default MenuBar;
