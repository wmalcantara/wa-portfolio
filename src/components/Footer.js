import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const Footer = styled.footer`
    background: var(--dark);
    color: var(--white);

    text-align: center;

    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;

    border-top: 1px solid rgba(255, 255, 255, 0.15);

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

    @media (max-width: 768px) {
      position: relative;
    }
  `;
  return (
    <Footer>
      <p>
        Feito com <span>❤️</span> por{' '}
        <a href="https://linkedin.com/in/walteralcantara" target="_blank">
          Walter Alcantara
        </a>
      </p>
    </Footer>
  );
};

export default Footer;
