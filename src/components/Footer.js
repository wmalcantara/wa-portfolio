//footer

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const Footer = styled.footer`
    background: var(--dark);
    color: var(--white);

    text-align: center;

    width: 100%;

    left: 0;
    bottom: 0;
    position: fixed;

    border-top: 1px solid rgba(255, 255, 255, 0.15);

    span {
      font-size: 1rem;
      color: var(--secondary);
    }

    a {
      font-weight: 700;
      color: var(--secondary);
      text-decoration: none;
    }

    @media (max-width: 768px) {
      position: relative;
    }
  `;

  return (
    <Footer>
      <p>
        Feito com <span>❤️</span> por{' '}
        <a
          href="https://linkedin.com/in/walteralcantara"
          rel="noreferrer"
          target="_blank"
        >
          Walter Alcantara
        </a>
      </p>
    </Footer>
  );
};

export default Footer;
