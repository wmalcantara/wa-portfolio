import { motion } from 'framer-motion';

import Head from '../../components/Head';
import SocialNetwork from '../../components/SocialNetwork';
import MenuBar from '../../components/Nav/MenuBar';
import Typewriter from '../../components/Typewriter';

import * as S from './styled.js';

const variants = {
  bgPhoto: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
      },
    },
  },

  contactBox: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3,
      },
    },
  },

  onHovering: {
    scale: 1.1,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Contato() {
  return (
    <>
      <Head title="WA | Contato" />
      <MenuBar />

      <S.Main>
        <motion.div
          className="bg-photo"
          initial="hidden"
          animate="visible"
          variants={variants.bgPhoto}
        />

        <Typewriter>contato.</Typewriter>

        <motion.div
          className="contact-me"
          initial="hidden"
          animate="visible"
          variants={variants.contactBox}
        >
          <p>
            Espero que tenha gostado do meu portfolio, se gostou das minhas
            habilidades você pode entrar em contato comigo, ficarei feliz em
            respondê-lo.
          </p>

          <br />

          <a
            className="email"
            href="mailto:waltermalcantara@gmail.com"
            title="Envie-me um email"
            style={{ color: 'var(--secondary)' }}
          >
            waltermalcantara@gmail.com
          </a>

          <SocialNetwork />
        </motion.div>
      </S.Main>
    </>
  );
}
