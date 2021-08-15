import { motion } from 'framer-motion';

import Head from '../../components/Head';
import SocialNet from '../../components/SocialNet';
import Typewriter from '../../components/Typewriter';

import { variants } from '../../services/motion';
const { contactBox } = variants;

import {
  ContactContainer,
  ContactContent,
  ContactText
} from '../../styles/pages/Contact';

import ContactForm from '../../components/ContactForm';

// const variants = {
//   bgPhoto: {
//     hidden: {
//       opacity: 0,
//       y: -20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.8,
//       },
//     },
//   },

//   contactBox: {
//     hidden: {
//       opacity: 0,
//       y: -20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 1.3,
//       },
//     },
//   },

//   onHovering: {
//     scale: 1.1,
//     y: -5,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

export default function Contato() {
  return (
    <ContactContainer>
      <ContactContent>

        <ContactText>
          <Typewriter>contato.</Typewriter>
          <p>waltermalcantara@gmail.com</p>
          <SocialNet />
        </ContactText>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants.contactBox}
        >
          <ContactForm />
        </motion.div>
      </ContactContent>
    </ContactContainer>
  );
}
