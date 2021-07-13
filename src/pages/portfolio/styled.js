import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  .portfolio {
    color: var(--white);
    padding: 75px 0.875rem;

    .card {
      margin: 0 auto;
      border-radius: 3px;
      color: var(--white);
      background: var(--secondary-dark);
      display: flex;
      align-items: center;
      padding: 0.875rem;
      margin: 1rem 0 1rem 0;

      .img {
        flex: 0.3;
        border: 1px solid var(--secondary);
        border-radius: 3px;
        min-height: 200px;
        min-width: 200px;

        background-position: center;
        background-repeat: inherit;
        object-fit: cover;

        margin-right: 0.875rem;
      }

      .description-box {
        flex: 0.7;
        h2 {
          font-size: 2rem;
          color: var(--secondary);
        }
        p {
          font-weight: 300;
          margin-bottom: 1rem;
        }
        a {
          display: flex;
          align-items: center;
          color: var(--secondary);
          text-decoration: none;
          //icon enter into
          & span {
            margin-left: 0.4rem;
            svg {
              fill: var(--secondary);
              width: 16px;
            }
          }
          &:hover {
            color: var(--white);
            svg {
              fill: var(--white);
            }
          }
        }
      }

      @media (max-width: 768px) {
        .img {
          display: none;
        }

        .description-box {
          flex: 1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  width: 90px;
  margin-top: 1rem;

  a {
    fill: var(--secondary);
  }

  a + a {
    margin-left: 1rem;
  }

  svg {
    height: 40px;
    cursor: pointer;
    transition: 0.7s ease;
    fill: var(--secondary);
    & path {
      transition: 0.7s ease;
    }
    &:hover {
      transform: translate3d(0, -3px, 0);
    }
    &:hover path {
      fill: var(--white);
    }
  } //svg
`;
