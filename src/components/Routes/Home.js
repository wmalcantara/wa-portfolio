import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TweenMax, Power3 } from 'gsap';

const Home = () => {
  let btnAbout = useRef(null);
  let btnGithub = useRef(null);
  let btnLinkedin = useRef(null);
  let bgPhoto = useRef(null);

  //GSAP
  useEffect(() => {
    TweenMax.fromTo(
      bgPhoto,
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, delay: 2.3, opacity: 1, ease: Power3.easeIn },
    );

    TweenMax.fromTo(
      btnAbout,
      0.7,
      { x: -50, opacity: 0 },
      { x: 0, delay: 2.6, opacity: 1, ease: Power3.easeIn },
    );

    TweenMax.fromTo(
      btnGithub,
      0.7,
      { x: -50, opacity: 0 },
      { x: 0, delay: 2.9, opacity: 1, ease: Power3.easeIn },
    );

    TweenMax.fromTo(
      btnLinkedin,
      0.7,
      { x: -50, opacity: 0 },
      { x: 0, delay: 3.2, opacity: 1, ease: Power3.easeIn },
    );
  }, []);

  //TypeWriter function
  useEffect(() => {
    const presentation = document.querySelector('.presentation');

    function typeWriter(element) {
      if (element !== null) {
        var textArr = element.innerHTML.split('');

        element.innerHTML = '';
        textArr.forEach((letter, i) => {
          setTimeout(() => (element.innerHTML += letter), 75 * i);
        });
      }
    }

    typeWriter(presentation);
  }, []);

  const SectionContainer = styled.section`
    background: var(--dark);
    color: var(--white);

    width: 100%;

    margin: 0 auto;
    display: flex;
    justify-content: center;
  `;

  const PresentationBox = styled.div`
    max-width: 960px;
    position: relative;

    display: flex;
    align-items: center;
  `;

  const TypeWriterBox = styled.div`
    width: 25%;

    position: absolute;
    z-index: 1;

    padding: 0.875rem;

    //border: 2px solid blue;

    h1 {
      font-family: 'Prata', monospace;
      color: var(--white);
      font-size: 3rem;

      &::after {
        content: '|';
        margin-left: 0.3rem;
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

    & > a {
      opacity: 0;

      display: block;
      width: 100%;

      border-radius: 3px;
      color: var(--secondary);

      margin-top: 1rem;
      padding: 0.875rem;

      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;

      letter-spacing: 0.1rem;
      font-size: 1rem;
      font-family: 'Open Sans';
      text-align: center;

      transition: 0.7s ease;

      background: transparent;
      position: relative;
      border: 2px solid var(--secondary);

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
  `;

  const PersonalPhoto = styled.div`
    display: block;

    //Radial-Gradient
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background: radial-gradient(
        39.07% 154.79% at 52.24% 45.64%,
        rgba(0, 0, 0, 0.15) 35.68%,
        #000000 100%
      );
    }
  `;

  const SocialBox = styled.div`
    margin-top: 1rem;

    display: flex;
    justify-content: space-evenly;

    img {
      cursor: pointer;

      transition: 0.2s ease;

      &:hover {
        transform: translate3d(0, -3px, 0);
        opacity: 0.5;
      }
    }
  `;

  return (
    <SectionContainer>
      <PresentationBox>
        <TypeWriterBox>
          <h1 className="presentation">Olá, me chamo Walter Alcantara.</h1>

          <Link
            to="/sobremim"
            ref={(element) => {
              btnAbout = element;
            }}
          >
            Saiba mais
          </Link>

          <SocialBox>
            <a
              href="https://www.github.com/wmalcantara"
              target="_blank"
              ref={(element) => {
                btnGithub = element;
              }}
            >
              <img src="./assets/icons/github.svg" alt="GitHub" />
            </a>

            <a
              href="https://www.linkedin.com/in/walteralcantara"
              target="_blank"
              ref={(element) => {
                btnLinkedin = element;
              }}
            >
              <img src="./assets/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </SocialBox>
        </TypeWriterBox>

        <PersonalPhoto>
          <img
            src="./assets/background.jpg"
            alt="Walter's photo"
            ref={(element) => {
              bgPhoto = element;
            }}
          />
        </PersonalPhoto>
      </PresentationBox>
    </SectionContainer>
  );
};

export default Home;
