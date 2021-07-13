import { motion } from 'framer-motion';
import styled from 'styled-components';

import GithubIcon from '../../public/assets/icons/github.svg';
import LinkedinIcon from '../../public/assets/icons/linkedin.svg';

const variants = {
  onHovering: {
    scale: 1.1,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

const SocialNetworkBox = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin: 0 1rem;
  }

  svg {
    height: 40px;
    transition: 0.7s ease;
    fill: var(--secondary);
  }

  svg:hover {
    fill: var(--white);
  }
`;

export default function SocialNetworkComponent() {
  return (
    <SocialNetworkBox className="socialBox">
      <motion.a
        href="https://www.github.com/wmalcantara"
        rel="noreferrer"
        target="_blank"
        whileHover={variants.onHovering}
      >
        <GithubIcon />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/walteralcantara"
        rel="noreferrer"
        target="_blank"
        whileHover={variants.onHovering}
      >
        <LinkedinIcon />
      </motion.a>
    </SocialNetworkBox>
  );
}
