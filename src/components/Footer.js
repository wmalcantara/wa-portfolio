import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const FooterBar = styled.footer`
    background: var(--secondary-dark);
    color: var(--white);
    text-align: center;
    width: 100%;
    height: 40vh;
    padding: 0.5rem 2rem;

    border-top: 1px solid rgba(255, 255, 255, 0.05);

    p {
      margin-top: 3rem;
    }

    a {
      font-weight: 700;
      color: var(--secondary);
      text-decoration: none;
    }
  `;
  return (
    <FooterBar>
      <p>
        Feito com ❤️ por{' '}
        <a href="https://linkedin.com/in/walteralcantara" target="_blank">
          Walter Alcantara
        </a>
      </p>
    </FooterBar>
  );
};

export default Footer;
