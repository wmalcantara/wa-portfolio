import styled from 'styled-components';

import { Container, Content } from '../styled';

export const ContactContainer = styled(Container)`
  background: #282A2D;

  @media (max-width: 768px) {
    //..
  }
`;

export const ContactContent = styled(Content)`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  gap: 6rem;
  max-width: 960px;
  padding: 0 1rem;

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
