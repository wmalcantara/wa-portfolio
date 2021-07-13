import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Head from '../../components/Head';
import SocialNetworkComponent from '../../components/SocialNetwork';
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
        delay: 2.5,
      },
    },
  },

  socialBoxAndBtn: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.7,
      },
    },
  },
};

export default function Home() {
  return (
    <>
      <Head title="WA | Início" />

      <S.Main>
        <motion.div
          className="bg-image"
          initial="hidden"
          animate="visible"
          variants={variants.bgPhoto}
        />

        <div className="hello">
          <Typewriter>Olá, me chamo Walter Alcantara.</Typewriter>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants.socialBoxAndBtn}
          >
            <Link href="/about">Saiba mais</Link>

            <div className="social-box">
              <SocialNetworkComponent />
            </div>
          </motion.div>
        </div>
      </S.Main>
    </>
  );
}
