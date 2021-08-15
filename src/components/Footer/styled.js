import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  color: #fff;
  background: #000;
  font-family: inherit;

  position: relative;
  bottom: 0;
  z-index: 100;
`;

export const FooterContent = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 3rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .walter {
    width: 100%;
    text-align: center;

    a {
      text-decoration: underline;
      color: #fff;
      margin: 0 1rem;
    }
  }

  @media (max-width: 768px) {
    //...
  }
`;
