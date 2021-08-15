import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { setScrolling } from '../../utils/setScrolling';

import Logo from '../../../public/assets/logo.svg';

import {
  HeaderContainer,
  HeaderContent,
  StyledBurger,
  Nav,
} from './styled';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setScrolling('header');
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledBurger open={open} onClick={() => setOpen(!open)} className="burger">
          <div />
          <div />
          <div />
        </StyledBurger>

        <div className="logo">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <Nav open={open}>
          <li>
            <Link href="/">inicio</Link>
          </li>
          <li>
            <Link href="/about">sobre mim</Link>
          </li>
          <li>
            <Link href="/portfolio">portfólio</Link>
          </li>
          <li>
            <Link href="/contact">contato</Link>
          </li>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
