import styled from 'styled-components';

export const TypewriterWrapper = styled.h1`
  color: var(--white);
  z-index: 1;

  //type animation
  &::after {
    content: '|';
    opacity: 1;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  } //type animation
`;
