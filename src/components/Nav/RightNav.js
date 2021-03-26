import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../../global.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;

  li {
    padding: 1rem;
    text-transform: lowercase;

    a {
      text-decoration: none;
      color: var(--secondary);
      transition: 0.7s ease;
    }

    a:hover {
      color: var(--white);
      font-weight: 700;
    }

    @media (max-width: 768px) {
      &::after {
        content: '';
        margin-top: 1rem;
        display: block;
        width: 100%;
        height: 2px;
        background: var(--secondary);
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: var(--secondary-dark);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    transition: transform 0.3s ease-in-out;
    padding-top: 4rem;
    border-left: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/sobremim">Sobre mim</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfólio</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
