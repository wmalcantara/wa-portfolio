import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;

  .bg-photo {
    grid-column: 1;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;

    max-width: 960px;
    background-image: radial-gradient(
        62.05% 60.79% at 27.64% 69.14%,
        rgba(0, 0, 0, 0.25) 75.15%,
        #000000 100%
      ),
      url(./assets/img/code-1.jpg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }

  .contact-me {
    grid-column: 2;
    padding: 1rem 0;
    color: var(--white);
    width: 100%;
    position: relative;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .contact-me,
    .typewriter-title {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.85);
    }

    .contact-me {
      h1 {
        font-size: 3.5rem;
        padding: 2rem 0.875rem;
      }
    }
  }
`;
