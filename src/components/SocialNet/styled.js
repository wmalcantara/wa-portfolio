import styled from 'styled-components';

export const SocialNetworkBox = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin: 0 1rem;
  }

  svg {
    height: 40px;
    transition: 0.7s ease;
    fill: var(--secondary);
  }

  svg:hover {
    fill: var(--white);
  }
`;