import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import cx from 'classnames';

import CloseIcon from '../../public/assets/icons/closeIcon.svg';

import { useContextAPI } from '../../src/hooks/useContextAPI';

const OverlayContainer = styled.section`
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
`;

export default function Overlay({ isModalOpen }) {
  return <OverlayContainer isModalOpen={isModalOpen} />;
}
