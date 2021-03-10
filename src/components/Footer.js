import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const FooterBar = styled.footer`
    background: var(--dark);
    color: var(--white);
    text-align: center;
    width: 100%;

    bottom: 10px;
    position: fixed;

    border-top: 1px solid rgba(255, 255, 255, 0.05);

    p {
      & > span {
        font-size: 1.5rem;
        color: var(--secondary);
      }
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
        Feito com <span>❤️</span> por{' '}
        <a href="https://linkedin.com/in/walteralcantara" target="_blank">
          Walter Alcantara
        </a>
      </p>
    </FooterBar>
  );
};

export default Footer;
