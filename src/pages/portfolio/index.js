import { motion } from 'framer-motion';

import { portfolios } from '../../services/api.json';

import Typewriter from '../../components/Typewriter';

import EnterIcon from '../../assets/icons/enterIcon.svg'

import {
  PortfolioContainer,
  PortfolioContent,
  PortfolioList
} from '../../styles/pages/Portfolio';

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
    <PortfolioContainer>
      <PortfolioContent>
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

        <motion.section
          className="portfolio-list"
          variants={variants.portfolioContainer}
          initial="hidden"
          animate="visible"
        >
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

              <div className="description">
                <h2>{portfolio.name}</h2>
                <p>{portfolio.description}</p>
                <a href={portfolio.link} target="_blank">
                  Visitar site
                  <EnterIcon width={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </PortfolioContent>
    </PortfolioContainer>
  );
}
