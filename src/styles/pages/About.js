import styled from 'styled-components';

import { Container, Content } from '../styled';

export const AboutContainer = styled(Container)`
  //...
`;

export const AboutContent = styled(Content)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .bg {
    grid-column: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;

    background-image: url(./assets/img/about-background.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    z-index: -1;
  }

  .infos {
    grid-column: 2;
    padding: 0 1rem;
    z-index: 1;

    .about-me {
      margin: 3rem 0 0 0;
      color: var(--white);
      width: 100%;
      position: relative;

      .first-folder {
        p {
          display: flex;
          align-items: center;

          a {
            display: flex;
            align-items: center;
            background: var(--secondary);
            color: #fff;
            margin: 0 1rem;
            padding: 0.5rem 1rem;
            border-radius: 3px;
            transition: all 0.3s ease;

            //download icon
            svg {
              min-width: 20px;
              fill: var(--white);
              margin: 0 0.5rem;
            }

            &:hover {
              background: var(--white);
              color: var(--secondary);
              svg {
                fill: var(--secondary);
              }
            }
          }
        }
      }

      .second-folder {
        p:not(p:last-child) {
          color: var(--secondary);
          margin: 1rem 0;
        }
      }
    }

    .experience-jobs {
      color: var(--white);

      strong {
        font-weight: 700;
      }

      a {
        color: inherit;
        text-decoration: underline;
      }
    }

    .tech-list,
    .tool-list {
      position: relative;
      z-index: 1;
      margin: 4rem 0 0 0;

      section {
        display: flex;
        flex-wrap: wrap;
        gap: 1px;
        
        div {
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 3px;
          background: var(--primary);
          border: 2px solid #000;
        }
      }

      h2,
      p {
        color: var(--white);
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    .bg {
      position: relative;
      height: 60vh;
      width: 100%;
      background-image: url(./assets/img/about-background-mobile.png);
    }

    .infos .about-me .first-folder button a {
      padding: 0.2rem;
    }
  }
`;
