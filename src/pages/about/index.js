import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { techs, tools } from '../../../api.json';

import { useContextAPI } from '../../hooks/useContextAPI';

import DownloadIcon from '../../../public/assets/icons/download.svg';

import Head from '../../components/Head';
import Modal from '../../components/Modal';
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

  function handleClick(tech) {
    setTech({
      img: tech.img,
      name: tech.name,
      description: tech.description,
    });
    setIsModalOpen(true);
  }

  return (
    <>
      <Head title="WA | Sobre" />
      <MenuBar />
      <S.Main>
        <motion.div
          className="bg-photo"
          initial="hidden"
          animate="visible"
          variants={variants.bgPhoto}
        />

        <div className="infos">
          <Typewriter>sobre mim.</Typewriter>

          <motion.div
            className="about-me"
            initial="hidden"
            animate="visible"
            variants={variants.aboutMe}
          >
            <div className="social-box">
              <SocialNetwork />
            </div>

            <div className="first-folder">
              <p>Faça o download do meu</p>
              <button type="button">
                <a
                  href="https://drive.google.com/file/d/18YxTgpMd6QbrMk-CNZBwicaZ1r83uwxa/view"
                  target="_blank"
                >
                  currículo
                  <DownloadIcon width={20} />
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
              {techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={variants.techContainer.techItem}
                  whileHover={variants.onHovering}
                  onClick={() => handleClick(tech)}
                >
                  <img src={tech.img} alt={tech.name} title={tech.name} />
                </motion.div>
              ))}
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
      </S.Main>
    </>
  );
}
