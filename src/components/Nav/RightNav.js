import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import cx from 'classnames';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  padding: 0.875rem;
  margin: 0px;

  li {
    padding: 0.875rem;
    text-transform: lowercase;

    &.selected {
      &:after {
        content: '';
        display: flex;
        width: 100%;
        height: 1px;
        background: var(--secondary);
        margin: 0 auto;
      }
    }

    a {
      text-decoration: none;
      color: #fff;
      transition: 0.7s ease;
    }

    @media (max-width: 768px) {
      padding: 0rem;

      &:nth-child(1)::after,
      &:nth-child(2)::after,
      &:nth-child(3)::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: var(--secondary);
        margin: 1rem 0 1rem 0;
      }
    }
  }

  li:nth-child(1) {
    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #000;
    position: fixed;

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    transition: transform 0.3s ease-in-out;
    padding-top: 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

export default function RightNav({ open }) {
  const [path, setPath] = useState('');

  useEffect(() => {
    const thisPath = window.location.pathname;
    setPath(thisPath);
  }, []);

  return (
    <Ul open={open}>
      <li className={cx({ selected: path === '/' })}>
        <Link href="/">Inicio</Link>
      </li>
      <li className={cx({ selected: path === '/about' })}>
        <Link href="/about">Sobre mim</Link>
      </li>
      <li className={cx({ selected: path === '/portfolio' })}>
        <Link href="/portfolio">Portfólio</Link>
      </li>
      <li className={cx({ selected: path === '/contact' })}>
        <Link href="/contact">Contato</Link>
      </li>
    </Ul>
  );
}
