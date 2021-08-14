import Head from '../../components/Head';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { portfolios } from '../../services/api.json';

import Typewriter from '../../components/Typewriter';

import { Main } from '../../styles/portfolio/styled.js';

const variants = {
  pageDescription: {
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

  portfolioContainer: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        delayChildren: 1.3,
        staggerChildren: 0.3,
      },
    },
    portfolioItem: {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
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

      <Head title="WA | Portfólio" />

      <Main>
        <div className="portfolio">
          <Typewriter>portfólio.</Typewriter>

          <br />

          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants.pageDescription}
          >
            Nesta página contém todos os meus projetos que já dei deploy na web,
            alguns deles são clones, projetos de bootcamp e projetos próprio.
          </motion.p>

          <motion.div
            className="tech-list"
            variants={variants.portfolioContainer}
            initial="hidden"
            animate="visible"
          >
            <section>
              {portfolios.map((portfolio) => (
                <motion.div
                  className="card"
                  key={portfolio.name}
                  variants={variants.portfolioContainer.portfolioItem}
                  whileHover={variants.onHovering}
                >
                  <img
                    className="img"
                    src={portfolio.img}
                    alt={portfolio.name}
                    title={portfolio.name}
                  />

                  <div className="description-box">
                    <h2>{portfolio.name}</h2>
                    <p>{portfolio.description}</p>
                    <a href={portfolio.link} target="_blank">
                      Visitar site
                      <span>
                        <svg viewBox="0 0 612 612">
                          <path
                            d="M331.685,425.378c-7.478,7.479-7.478,19.584,0,27.043c7.479,7.478,19.584,7.478,27.043,0l131.943-131.962
                            c3.979-3.979,5.681-9.276,5.412-14.479c0.269-5.221-1.434-10.499-5.412-14.477L358.728,159.56
                            c-7.459-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.042l100.272,100.272H19.125C8.568,286.875,0,295.443,0,306
                            c0,10.557,8.568,19.125,19.125,19.125h412.832L331.685,425.378z M535.5,38.25H153c-42.247,0-76.5,34.253-76.5,76.5v76.5h38.25
                            v-76.5c0-21.114,17.117-38.25,38.25-38.25h382.5c21.133,0,38.25,17.136,38.25,38.25v382.5c0,21.114-17.117,38.25-38.25,38.25H153
                            c-21.133,0-38.25-17.117-38.25-38.25v-76.5H76.5v76.5c0,42.247,34.253,76.5,76.5,76.5h382.5c42.247,0,76.5-34.253,76.5-76.5
                            v-382.5C612,72.503,577.747,38.25,535.5,38.25z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </section>
          </motion.div>
        </div>
      </Main>
    </>
  );
}
