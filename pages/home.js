import Head from './Components/Head';
import SocialNetworkComponent from './Components/SocialNetwork';


import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';

const Main = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  padding-top: 55px; //altura do menubar

  display: grid;
  grid-template-columns: 1fr 1fr;

  .bg-photo {
    height: 450px;
    width: 100%;
    max-width: 960px;
    z-index: -1;
    position: fixed;
    grid-column: 2;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(./assets/img/home-background.png);

  }

  .hello {

    width: 320px;
    padding: 0.875rem;
    margin-top: 2rem;
    position: fixed;
    grid-column: 1;

    
    .typewriter-title {
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
      } //type animation
    }

    a[href^='/sobre'] {
      display: block;
      width: 100%;

      border-radius: 3px;
      color: var(--secondary);

      text-decoration: none;
      text-transform: capitalize;
      font-weight: 700;

      text-align: center;
      background: transparent;
      border: 2px solid var(--secondary);

      padding: 0.875rem;
      margin-top: 0.875rem;

      position: relative;
      transition: 0.7s ease;

      //animation on hover
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: -1;
        width: 0%;
        height: 103%;
        transition: 0.7s ease;
        background: var(--secondary);
      }

      &:hover {
        color: var(--white);
      }

      &:hover::after {
        width: 101%;
      }
    }

    .social-box > div {
      justify-content: space-evenly;
    }


  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;

    .hello {
      
      position: relative;
      margin-top: 4rem;
      width: 100%;
      h1 {
        font-size: 2.5rem;
      }

      a {
        justify-self: center;
      }
    
    }

    .bg-photo {
      
      top: auto;

      position: relative;
      height: 250px;
      width: 100%;

      background-image: radial-gradient(
          94% 63% at 31% 66%,
          rgba(0, 0, 0, 0) 53%,
          #000000 100%
        ),
        url(./assets/img/home-background-mobile.png);
    
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
      <Head title="WA | Início" />


      <Main>
        <motion.div
          className="bg-photo"
          initial="hidden"
          animate="visible"
          variants={variants.bgPhoto}
        />

        <div className="hello">
          <h1 className="typewriter-title">Olá, me chamo Walter Alcantara.</h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants.socialBoxAndBtn}
          >
            <Link href="/sobre">Saiba mais</Link>

            <div className="social-box">
              <SocialNetworkComponent />
            </div>

          </motion.div>

        </div>
      </Main>
    </>
  );
}
