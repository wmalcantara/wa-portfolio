import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import cx from 'classnames';

import Overlay from './Overlay';
import CloseIcon from '../../public/assets/icons/closeIcon.svg';

import { useContextAPI } from '../../src/hooks/useContextAPI';

const ModalContainer = styled.div`
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
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

  position: fixed;
  width: 300px;
  height: auto;
  left: 50%;
  top: 25%;
  z-index: 100;
  margin-left: -150px;

  background: #1d1d1d;
  color: #fff;

  border-radius: 5px;

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
      &:hover {
        /* filter: brightness(.8); */
        svg path {
          transition: fill 0.3s;
          fill: var(--secondary);
        }
      }
    }
  }

  main {
    display: flex;
    padding: 0.5rem;

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
`;

export default function Modal({ props = {} }) {
  const { img, name, description } = props;
  const { isModalOpen, setIsModalOpen } = useContextAPI();

  return (
    <>
      <Overlay isModalOpen={isModalOpen} />
      <ModalContainer isModalOpen={isModalOpen}>
        <header>
          <h1>{name}</h1>
          <button className="close-modal" onClick={() => setIsModalOpen(false)}>
            <CloseIcon width={30} height={30} />
          </button>
        </header>
        <main>
          <aside>
            <img src={img} alt={name} />
          </aside>
          <div>{description}</div>
        </main>
      </ModalContainer>
    </>
  );
}
