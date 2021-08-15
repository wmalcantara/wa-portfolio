import styled from 'styled-components';
import {
  Container,
  Content,
} from '../styled';

export const HomeContainer = styled(Container)`
  //..
`;

export const HomeContent = styled(Content)`
  display: flex;
  position: relative;

  .hello {
    max-width: 350px;
    margin: 12rem 0 0 0;
    padding: 0 1rem;

    a[href='/about'] {
      display: block;
      width: 100%;

      border-radius: 3px;
      color: var(--secondary);

      text-decoration: none;
      text-transform: capitalize;
      font-weight: 700;

      text-align: center;
      background: transparent;
      border: 2px solid var(--secondary);

      padding: 0.875rem;
      margin-top: 0.875rem;

      position: relative;
      transition: 0.7s ease;

      //animation on hover
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: -1;
        width: 0%;
        height: 103%;
        transition: 0.7s ease;
        background: var(--secondary);
      }

      &:hover {
        color: var(--white);
      }

      &:hover::after {
        width: 101%;
      }
    }

    .social-box div {
      margin: 1rem 0 0;
      justify-content: space-evenly;
    }
  }
  
  .bg {
    z-index: -1;
    position: absolute;
    right: 0;

    img {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      object-fit: cover;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    
    .bg { position: unset;}

    .hello {
      margin: unset;
      min-width: unset;
      max-width: unset;
      width: 100%;

      h1 { font-size: 2.5rem; }
    }
  }
`;
