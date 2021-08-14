import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  background: #282A2D;

  @media (max-width: 768px) {
    //..
  }
`;

export const ContactContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 80px 1rem 0;

  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactText = styled.div`
  color: #fff;
  p {
    margin: 1rem 0;
  }

`
