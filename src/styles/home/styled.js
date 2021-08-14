import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  /* padding-top: 55px; //altura do menubar */

  display: grid;
  grid-template-columns: 1fr 1fr;

  .bg-image {
    height: 450px;
    width: 100%;
    max-width: 960px;
    z-index: -1;
    position: fixed;
    grid-column: 2;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(./assets/img/home-background.png);
  }

  .hello {
    width: 320px;
    padding: 0.875rem;
    margin-top: 12rem;
    position: fixed;
    grid-column: 1;

    a[href^='/about'] {
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

    .social-box > div {
      margin: 1rem 0 0 0;
      justify-content: space-evenly;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;

    .hello {
      position: absolute;
      margin: unset;
      bottom: 30px;

      width: 100%;
      h1 {
        font-size: 2.5rem;
      }

      a {
        justify-self: center;
      }
    }

    .bg-image {
      top: 0;

    }


  }
`;
