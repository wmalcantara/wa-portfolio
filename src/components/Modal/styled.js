import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  /* opacity: 1; */
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
  animation: fade 0.3s forwards;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`

export const ModalContainer = styled.div`
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
  position: fixed;
  width: 400px;
  height: auto;
  left: 50%;
  top: 25%;
  z-index: 100;
  margin-left: -150px;

  background: #1d1d1d;
  color: #fff;

  border-radius: 5px;
  animation: show 0.3s forwards;

  @keyframes show {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(50px);
    }
  }

  &.opened {
    display: block;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    background-color: rgba(255, 255, 255, 0.05);

    .close-modal {
      background: transparent;
      border: 0;
      cursor: pointer;
    }
  }

  main {
    display: flex;
    padding: 3rem 0.5rem;

    div {
      flex: 0.7;
    }
    aside {
      flex: 0.3;
      align-self: center;
      & img {
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;