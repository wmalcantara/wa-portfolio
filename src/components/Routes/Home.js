import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Footer from '../Footer';

const Container = styled.div`
  width: 100%;
  max-width: 1366px;

  margin: 0 auto;

  position: relative;
`;

const Background = styled.div`
  top: 0;

  display: block;

  position: fixed;
  height: 70%;
  width: 100%;
  max-width: 1366px;

  z-index: -1;

  background-image: linear-gradient(
      274.46deg,
      #000000 5.44%,
      rgba(0, 0, 0, 0.05) 26.18%
    ),
    linear-gradient(96.68deg, #000000 28.16%, rgba(0, 0, 0, 0.05) 45.61%),
    url(./assets/img/walter-background.png);

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Hello = styled.div`
  width: 25%;
  height: 100%;

  padding: 0.875rem;
  margin: 1rem;

  //btnLearnMore
  & > a {
    opacity: 0; //start 0 before animation;

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
    margin-top: 1rem;

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
    } //animation on hover
  } //btnLearnMore

  //Typewriter
  h1 {
    font-family: 700 'Roboto Mono';
    color: var(--white);
    font-size: 4rem;
    font-weight: 700;

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
  } //Typewriter
`;

const SocialBox = styled.div`
  margin-top: 4.5rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    height: 40px;
    cursor: pointer;
    transition: 0.7s ease;
    fill: var(--secondary);

    & path {
      transition: 0.7s ease;
    }

    &:hover {
      transform: translate3d(0, -3px, 0);
    }

    &:hover path {
      fill: var(--white);
    }
  } //svg
`;

const Home = () => {
  let btnLearnMore = useRef(null);
  let socialBox = useRef(null);
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
      btnLearnMore,
      0.7,
      { x: -50, opacity: 0 },
      { x: 0, delay: 2.6, opacity: 1, ease: Power3.easeIn },
    );
    TweenMax.fromTo(
      socialBox,
      0.7,
      { x: -50, opacity: 0 },
      { x: 0, delay: 3.2, opacity: 1, ease: Power3.easeIn },
    );
  }, []);

  //TypeWriter function
  useEffect(() => {
    const typewriter = document.querySelector('.typewriter');

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
  }, []);

  return (
    <>
      <Container>
        <Background
          ref={(element) => {
            bgPhoto = element;
          }}
        />

        <Hello>
          <h1 className="typewriter">Olá, me chamo Walter Alcantara.</h1>

          <Link
            to="/sobremim"
            ref={(element) => {
              btnLearnMore = element;
            }}
          >
            Saiba mais
          </Link>

          <SocialBox
            ref={(element) => {
              socialBox = element;
            }}
          >
            {/* github icon */}
            <a href="https://www.github.com/wmalcantara" target="_blank">
              <svg
                id="github"
                x="0px"
                y="0px"
                fill=""
                width="50px"
                height="50px"
                viewBox="0 0 438.549 438.549"
              >
                <path
                  d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
            c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
            c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
            c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
            c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
            c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
            c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
            c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
            c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
            c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
            c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
            c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
            c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
            c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
            c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
            c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
            c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
            c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
            c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
            C438.536,184.851,428.728,148.168,409.132,114.573z"
                />
              </svg>
            </a>

            {/* linkedin icon */}
            <a
              href="https://www.linkedin.com/in/walteralcantara"
              target="_blank"
            >
              <svg
                id="linkedin"
                x="0px"
                y="0px"
                fill=""
                width="50px"
                height="50px"
                viewBox="0 0 510 510"
              >
                <path
                  id="li"
                  d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
          M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9
          S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204
          V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z"
                />
              </svg>
            </a>
          </SocialBox>
        </Hello>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
