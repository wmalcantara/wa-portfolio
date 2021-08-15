import { motion } from 'framer-motion';

import GithubIcon from '../../assets/icons/github.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';

import { SocialNetworkBox } from './styled';

const variants = {
  onHovering: {
    scale: 1.1,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

export default function SocialNet() {
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
