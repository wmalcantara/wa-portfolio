import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .bg-photo {
    grid-column: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    max-width: 960px;
    background-image: url(./assets/img/about-background.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    z-index: -1;

    @media (max-width: 768px) {
      position: relative;
      height: 60vh;
      width: 100%;
      background-image: url(./assets/img/about-background-mobile.png);
    }
  }

  .infos {
    grid-column: 2;
    padding: 0.625rem;
    z-index: 1;
    margin-top: 100px; //temp

    .about-me {
      margin-top: 3rem;
      color: var(--white);
      width: 100%;
      position: relative;

      .first-folder {
        display: flex;
        align-items: center;

        button {
          background: var(--secondary);
          border: 0;
          margin-left: 0.4rem;
          border-radius: 3px;
          transition: 0.3s ease;
          margin-left: 0.4rem;
          padding: 0.25rem; //4px = 4px*1rem/16px

          &:hover {
            background: var(--white);
          }

          //btn resume download
          a {
            text-decoration: none;
            color: var(--white);
            padding: 0.4rem;
            display: flex;
            align-items: center;
            &:hover svg,
            &:hover {
              color: var(--secondary);
              fill: var(--secondary);
            }
          }

          //download icon
          svg {
            fill: var(--white);
            margin-left: 0.4rem;
          }
          @media (max-width: 768px) {
            a {
              padding: 0.2rem;
            }
          }
        }
      }

      /* .social-box {
        display: flex;
        margin-bottom: -3rem;

        a + a {
          margin-left: 1rem;
        }
      } */

      .second-folder {
        margin-top: 0.875rem;
        //space between every p
        p + p {
          margin-top: 0.875rem;
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
      section {
        display: flex;
        flex-wrap: wrap;
      }
      h2,
      p {
        color: var(--white);
      }
      div {
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 3px;
        background: var(--primary);
        transition: 0.3s ease;
        //animation slide-up
        &:hover {
          transform: translate3d(0, -3px, 0);
        }
      }
      //gutter
      section {
        //gutter between every div = .5rem = 8px*1rem/16px
        div:first-child,
        div + div {
          margin-left: 0.5rem;
          margin-top: 0.5rem;
        }
      }
    }
    //space between every div inside infos div
    div + div {
      margin-top: 4rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
`;
