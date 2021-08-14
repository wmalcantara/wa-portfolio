import { motion } from 'framer-motion';

import Head from '../../components/Head';
import SocialNetwork from '../../components/SocialNetwork';
import Typewriter from '../../components/Typewriter';

import {
  Main,
  ContactContent,
  ContactText
} from '../../styles/contact/styled.js';

import ContactForm from '../../components/ContactForm';

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

      <Main>
        <ContactContent>
          {/* <motion.div
            className="bg-photo"
            initial="hidden"
            animate="visible"
            variants={variants.bgPhoto}
          /> */}

          <ContactText>
            <Typewriter>contato.</Typewriter>
            <p>waltermalcantara@gmail.com</p>
            <SocialNetwork />
          </ContactText>

          {/* <motion.div
            className="contact-me"
            initial="hidden"
            animate="visible"
            variants={variants.contactBox}
          > */}
          <ContactForm />
          {/* </motion.div> */}
        </ContactContent>
      </Main>
    </>
  );
}
