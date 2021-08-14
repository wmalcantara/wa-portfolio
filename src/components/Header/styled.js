import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: #000;
  position: fixed;
  z-index: 100;
  transition: border-bottom 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  /* &.scrolling-active {
    background: #fff;
    border-bottom: 4px solid #000;
  } */
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1360px;
  margin: 0 auto;
  padding: 1rem;

  font-family: inherit;

  .logo {
    cursor: pointer;

    path {
      animation: animateLogo 6s ease infinite alternate;
      stroke: var(--secondary);
    }

    @keyframes animateLogo {
      0% {
        stroke-width: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }
      25% {
        stroke-width: 1;
        fill: transparent;
        stroke-dasharray: 100 0;
      }
      60%,
      100% {
        stroke-width: 0.5;
        fill: var(--secondary);
      }
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr;
    padding: .5rem;

    .burger, .logo, .cart {
      grid-row: 1;
    }
    
    .logo {
      flex: 1;
      justify-self: center;
    }

    .cart {
      justify-self: end;
    }

    > div:nth-child(3) {
      margin: 1rem 0;
      grid-column: 1 / 4;
      width: 100% !important;
    }
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 1;
  display: none;

  div {
    width: 2.22rem;
    height: .25rem;
    background-color: #fff;
    transform-origin: 1px;
    transition: 0.3s ease;
    
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  flex-flow: row nowrap;
  padding: 0.875rem;
  margin: unset;
  font-weight: normal;
  
  li a {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #000;
    position: fixed;
    filter: brightness(0.95);
    border-right: .15rem solid #000;
    transform: ${({ open }) => (open ? 'translateX(-0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 160px;
    transition: transform 0.3s ease-in-out;
    padding-top: 1rem;
    
    li:first-child {
      margin-top: 6rem;
    }

    li {
      padding: 0rem;
      width: 100%;

      a {
        justify-content: center;
        padding: 1rem 0;
        background: #000;
        color: #fff;
        border-radius: .5rem;
        svg path {
          fill: #fff;
        }
      }
    }
  }
`;
