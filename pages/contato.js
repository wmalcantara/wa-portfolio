import Head from './Components/Head';
import SocialNetworkComponent from './Components/SocialNetwork';
import MenuBar from './Nav/MenuBar';


import { useEffect } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';


const Main = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .bg-photo {
    grid-column: 1;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;

    max-width: 960px;
    background-image: radial-gradient(
        62.05% 60.79% at 27.64% 69.14%,
        rgba(0, 0, 0, 0.25) 75.15%,
        #000000 100%
      ),
      url(./assets/img/code-1.jpg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }

  .typewriter-title {
    grid-column: 2;
    z-index: 1;
    margin-top: 8rem;
    color: var(--white);
    //type animation
    &::after {
      content: '|';
      opacity: 1;
      animation: blink 1s infinite;
    }
    @keyframes blink {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
  }

  .contact-me {

    grid-column: 2;
    padding: 1rem 0;
    color: var(--white);
    width: 100%;
    position: relative;

    .socialBox {
      a + a {
        margin-left: 1rem;
      }    
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    .contact-me,
    .typewriter-title {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.85);
    }

    .contact-me {
      h1 {
        font-size: 3.5rem;
        padding: 2rem 0.875rem;
      }
    }
  }
`;

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

  //Typewriting effect
  useEffect(() => {
    const typewriter = document.querySelector('.typewriter-title');

    function typeWriter(element) {
      if (element !== null) {
        var textArr = element.innerHTML.split('');

        element.innerHTML = '';
        textArr.forEach((letter, i) => {
          setTimeout(() => (element.innerHTML += letter), 70 * i);
        });
      }
    }

    typeWriter(typewriter);
  }, []);

  return (
    <>
      <Head title="WA | Contato" />
      <MenuBar />


      <Main>
        <motion.div
          className="bg-photo"
          initial="hidden"
          animate="visible"
          variants={variants.bgPhoto}
        />

        <h1 className="typewriter-title">contato.</h1>

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

          <br/>

          <a
            className="email"
            href="mailto:waltermalcantara@gmail.com"
            title="Envie-me um email"
            style={{color: 'var(--secondary)'}}
          >
            waltermalcantara@gmail.com
          </a>
          
          <SocialNetworkComponent />


        </motion.div>
      </Main>
    </>
  );
}
