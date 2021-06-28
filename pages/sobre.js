import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Head from './Components/Head';
import Modal from './Components/Modal';
import SocialNetworkComponent from './Components/SocialNetwork';
import MenuBar from './Nav/MenuBar';

import { useContextAPI } from '../src/hooks/useContextAPI';

import styled from 'styled-components';

import { techs, tools } from '../dev.json';

const Main = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .bg-photo {
    grid-column: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    max-width: 960px;
    background-image: url(./assets/img/about-background.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;

    @media (max-width: 768px) {
      position: relative;
      height: 60vh;
      width: 100%;
      background-image: url(./assets/img/about-background-mobile.png);
    }
  }

  .infos {
    grid-column: 2;
    padding: 0.625rem;
    z-index: 1;

    .typewriter-title {
      padding-top: 8rem;
      position: relative;
      color: var(--white);
      h1 {
        font-size: 4rem;
        font-weight: 700;
      }
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
      @media (max-width: 768px) {
        padding: 2rem 0.875rem;
      }
    }
    
    .about-me {
      margin-top: 3rem;
      color: var(--white);
      width: 100%;
      position: relative;

      .first-folder {
        display: flex;
        align-items: center;
        button {
          background: var(--secondary);
          border: 0;
          margin-left: 0.4rem;
          border-radius: 3px;
          transition: 0.3s ease;
          margin-left: 0.4rem;
          padding: 0.25rem; //4px = 4px*1rem/16px
          &:hover {
            background: var(--white);
          }
          //btn resume download
          a {
            text-decoration: none;
            color: var(--white);
            padding: 0.4rem;
            display: flex;
            align-items: center;
            &:hover svg,
            &:hover {
              color: var(--secondary);
              fill: var(--secondary);
            }
          }
          //download icon
          svg {
            min-width: 20px;
            fill: var(--white);
            margin-left: 0.4rem;
          }
          @media (max-width: 768px) {
            a {
              padding: 0.2rem;
            }
            svg {
            }
          }
        }
        @media (max-width: 768px) {
        }
      }

      .social-box {
        display: flex;
        margin-bottom: -3rem;

        a + a {
          margin-left: 1rem;
        }
      }

      .second-folder {
        margin-top: 0.875rem;
        //space between every p
        p + p {
          margin-top: 0.875rem;
        }
      }
    }
    .experience-jobs {
      color: var(--white);

      strong {
        font-weight: 700;
      }
      a {
        color: inherit;
        text-decoration: underline;
      }
    }
    .tech-list,
    .tool-list {
      position: relative;
      z-index: 1;
      section {
        display: flex;
        flex-wrap: wrap;
      }
      h2,
      p {
        color: var(--white);
      }
      div {
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 3px;
        background: var(--secondary-dark);
        transition: 0.3s ease;
        //animation slide-up
        &:hover {
          transform: translate3d(0, -3px, 0);
        }
      }
      //gutter
      section {
        //gutter between every div = .5rem = 8px*1rem/16px
        div:first-child,
        div + div {
          margin-left: 0.5rem;
          margin-top: 0.5rem;
        }
      }
    }
    //space between every div inside infos div
    div + div {
      margin-top: 4rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
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
        delay: 0.9,
      },
    },
  },

  aboutMe: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
      },
    },
  },

  experienceJobs: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
      },
    },
  },

  techContainer: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8,
        delayChildren: 2,
        staggerChildren: 0.1,
      },
    },
    techItem: {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  },

  toolContainer: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.1,
        delayChildren: 3.3,
        staggerChildren: 0.1,
      },
    },
    toolItem: {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  },

  onHovering: {
    scale: 1.1,
    transition: {
      duration: 0.1,
    },
  },
};

export default function Sobre() {
  const { setIsModalOpen } = useContextAPI();

  const [tech, setTech] = useState({});

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

  function handleClick(tech){
    setTech({
      img: tech.img,
      name: tech.name,
      description: tech.description
    })
    setIsModalOpen(true);
  }

  return (
    <>
      <Head title="WA | Sobre" />
      <MenuBar />
<downloadIcon />
      <Main>

        <motion.div
          className="bg-photo"
          initial="hidden"
          animate="visible"
          variants={variants.bgPhoto}
        />

        <div className="infos">

          <h1 className="typewriter-title">sobre mim.</h1>

          <motion.div
            className="about-me"
            initial="hidden"
            animate="visible"
            variants={variants.aboutMe}
          >

            <div className="social-box">
              <SocialNetworkComponent />
            </div>
            
           
            <div className="first-folder">
              <p>Faça o download do meu</p>
              <button type="button">
                <a href="https://drive.google.com/file/d/18YxTgpMd6QbrMk-CNZBwicaZ1r83uwxa/view" target="_blank">
                  currículo
                  <span>
                    <svg viewBox="0 0 512 512">
                      <path
                        d="M472,313v139c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V313H0v139c0,33.084,26.916,60,60,60h392
                          c33.084,0,60-26.916,60-60V313H472z"
                      />
                      <polygon points="352,235.716 276,311.716 276,0 236,0 236,311.716 160,235.716 131.716,264 256,388.284 380.284,264 		" />
                    </svg>
                  </span>
                </a>
              </button>
            </div>

            <div className="second-folder">
              <p style={{ color: 'var(--secondary)' }}>
                Estudante em Análises e Desenvolvimento de Sistemas pelo
                Instituto Federal de São Paulo, Campus de Jacareí.
              </p>
              <p>
                Olá, meu nome é Walter Alcantara, tenho 23 anos, sou casado e me
                considero um entusiasta e um apaixonado por tecnologia. Amo
                aprender uma nova tecnologia, explorar e descobrir como é
                possível aplicar.
              </p>
            </div>
          
          </motion.div>

          <motion.div
            className="experience-jobs"
            initial="hidden"
            animate="visible"
            variants={variants.experienceJobs}
          >

            <h2>experiência</h2>
            <br />

            <strong style={{ color: 'var(--secondary)' }}>
              Estagiário Front-end
            </strong>
            <br />
            <a href="https://enext.com.br" target="_blank">
              @Enext
            </a>
            <p>03/2021 - Atualmente.</p>
          </motion.div>

          <motion.div
            className="tech-list"
            variants={variants.techContainer}
            initial="hidden"
            animate="visible"
          >
            <h2>habilidades</h2>
            <br />

            <p>Algumas tecnologias que utilizo e estudo no momento.</p>

            <section>
              {techs.map((tech, index) => {
                return (
                  <>
                    <motion.div
                      key={index}
                      variants={variants.techContainer.techItem}
                      whileHover={variants.onHovering}
                      onClick={() => handleClick(tech)}
                    >
                      <img src={tech.img} alt={tech.name} title={tech.name} />
                    </motion.div>
                  </>
                );
              })}
            </section>

          </motion.div>

          <motion.div
            className="tool-list"
            variants={variants.toolContainer}
            initial="hidden"
            animate="visible"
          >
            <h2>ferramentas</h2>
            <br />

            <p>Algumas ferramentas que me auxiliam no desenvolvimento.</p>

            <section>
              {tools.map((tool) => {
                return (
                  <motion.div
                    key={tool.name}
                    variants={variants.toolContainer.toolItem}
                    whileHover={variants.onHovering}
                  >
                    <img src={tool.img} alt={tool.name} title={tool.name} />
                  </motion.div>
                );
              })}
            </section>

          </motion.div>

          <Modal props={tech} />
        
        </div>
      </Main>
    </>
  );
}
