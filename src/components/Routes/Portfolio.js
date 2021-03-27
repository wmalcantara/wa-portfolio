//portfolio

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { TweenMax, Power3 } from 'gsap';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  .typewriter-title {
    color: var(--white);
    padding: 4rem 0px 2rem 0px;

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

  & > p {
    color: var(--white);
    width: 50%;
    margin-bottom: 1rem;
  }

  .card {
    margin: 0 auto;

    border-radius: 3px;

    color: var(--white);
    background: var(--secondary-dark);

    display: flex;
    align-items: center;

    padding: 0.875rem;

    .img {
      flex: 0.2;

      border: 1px solid var(--secondary);
      border-radius: 3px;
      height: 150px;
      width: 150px;

      background-image: url(./assets/portfolio-img/pomoreact.png);
      background-position: center;
    }

    .description-box {
      flex: 0.7;

      h2 {
        font-size: 2rem;
        color: var(--secondary);
      }

      p {
        font-weight: 300;
        margin-bottom: 1rem;
      }

      a {
        display: flex;
        align-items: center;
        color: var(--secondary);
        text-decoration: none;

        //icon enter into
        & span {
          margin-left: 0.4rem;

          svg {
            fill: var(--secondary);
            width: 16px;
          }
        }

        &:hover {
          color: var(--white);

          svg {
            fill: var(--white);
          }
        }
      }
    }

    //space between img and desc-box
    div + div {
      margin-left: 0.875rem;
    }
  }
`;

const Portfolio = () => {
  let portfDescription = useRef(null);
  let card = useRef(null);

  //GSAP
  useEffect(() => {
    TweenMax.fromTo(
      portfDescription,
      0.2,
      { y: -50, opacity: 0 },
      { y: 0, delay: 2.3, opacity: 1, ease: Power3.easeIn },
    );
    TweenMax.fromTo(
      card,
      0.5,
      { y: -50, opacity: 0 },
      { y: 0, delay: 2.3, opacity: 1, ease: Power3.easeIn },
    );
  }, []); //GSAP

  //Typewriter
  useEffect(() => {
    const typewriter = document.querySelector('.typewriter-title');

    function typeWriter(element) {
      if (element !== null) {
        var textArr = element.innerHTML.split('');

        element.innerHTML = '';
        textArr.forEach((letter, i) => {
          setTimeout(() => (element.innerHTML += letter), 75 * i);
        });
      }
    }

    typeWriter(typewriter);
  }, []); //Typewriter

  return (
    <>
      <Helmet>
        <title>Walter Alcantara | Portfólio</title>
      </Helmet>

      <Div>
        <h1 className="typewriter-title">portfólio.</h1>

        <p ref={(el) => (portfDescription = el)}>
          Nesta página contém todos os meus projetos que já dei deploy na web,
          alguns deles são clones, projetos de bootcamp e projetos próprio.
        </p>

        <div className="card" ref={(el) => (card = el)}>
          <div className="img" />
          <div className="description-box">
            <h2>Pomo.react</h2>
            <p>
              Pomo.react é uma aplicação de desenvolvimento próprio, baseado na
              técnica pomodoro, consiste em ser uma técnica de foco por durante
              25 minutos, e 5 minutos de pausa. Construido em react como meio de
              estudo da tecnologia.
            </p>
            <a
              href="https://pomoreact.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
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
        </div>
      </Div>
    </>
  );
};

export default Portfolio;
