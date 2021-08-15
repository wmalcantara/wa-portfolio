import styled from 'styled-components';

import { Container, Content } from '../styled';

export const PortfolioContainer = styled(Container)`
  //...
`;

export const PortfolioContent = styled(Content)`
  color: var(--white);
  padding: 2rem 1rem;

  .portfolio-list {
    
    .card {
      display: flex;
      align-items: center;

      margin: 1rem auto;

      border-radius: .5rem;

      color: var(--white);
      background: #282a2d;

      max-width: 960px;

      .img {
        flex: 0.3;

        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;

        min-height: 200px;
        min-width: 200px;

        background-position: center;
        background-repeat: inherit;
        object-fit: cover;
      }

      .description {
        flex: 0.7;
        padding: 0 1rem;

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

          svg { fill: var(--secondary); margin: 0 1rem; }
          &:hover {
            color: var(--white);
            svg { fill: var(--white); }
          }
        }

      }

    @media (max-width: 768px) {
      flex-direction: column;

      .img {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        border-bottom-left-radius: unset;
      }

      .description {
        padding: 1rem;
      }
    }
  }

  }
`;
