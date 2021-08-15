import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1366px;
  margin: 55px auto 0 auto;

  @media(max-width: 768px) {
    margin: 45px auto 0 auto;
  }
`;