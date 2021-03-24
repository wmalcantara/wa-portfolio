import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import styled from 'styled-components';

import techs from '../../techs.json';
import tools from '../../tools.json';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  background: var(--dark);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    overflow-x: hidden;
  }
`;

const Background = styled.div`
  grid-column: 1;

  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  max-width: 960px;
  background-image: radial-gradient(
      59.41% 59.41% at 25.44% 64.55%,
      rgba(0, 0, 0, 0.25) 75.15%,
      #000000 100%
    ),
    radial-gradient(
      134.49% 277.33% at 20.74% 58.61%,
      rgba(0, 0, 0, 0.15) 81.25%,
      #000000 94.85%
    ),
    url(./assets/img/walter-background2.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;

  @media (max-width: 768px) {
    top: 50px;

    position: relative;

    height: 40vh;
    min-height: 200px;

    width: 100%;
    min-width: 450px;

    background-image: linear-gradient(
        -366deg,
        #000000 20%,
        rgba(0, 0, 0, 0.05) 55%
      ),
      url(./assets/img/walter-background2.png);
  }
`;

const SectionBox = styled.section`
  grid-column: 2;
  width: 100%;
  padding: 0.625rem;

  @media (max-width: 768px) {
    p,
    li {
      font-size: 0.875rem;
    }
  }
`;

const TypeWriter = styled.div`
  padding-top: 8rem;
  position: relative;
  color: var(--white);

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  //typewriting animation
  h1:after {
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
  } //typewriting animation

  @media (max-width: 768px) {
    padding: 2rem 0.875rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

const AboutMe = styled.div`
  padding: 4.5rem 0 0 0.875rem;
  color: var(--white);
  width: 100%;
  position: relative;

  ul {
    margin-top: 1rem;
    display: flex;
    list-style-type: none;
    align-items: center;

    li:first-child,
    li:nth-child(2) {
      svg {
        fill: var(--secondary);
        width: 30px;
        transition: 0.7s ease;

        &:hover {
          fill: var(--white);
          transform: translate3d(0, -3px, 0);
        }
      }

      @media (max-width: 768px) {
        svg {
          min-width: 30px;
        }
      }
    }

    li:last-child {
      display: flex;
      align-items: center;

      button {
        background: var(--secondary);
        border: 0;
        border-radius: 3px;
        margin-left: 0.4rem;
        transition: 0.3s ease;

        &:hover {
          background: var(--white);
        }

        svg {
          fill: var(--white);
          margin-left: 0.4rem;
        }

        a {
          text-decoration: none;
          color: var(--white);
          display: flex;
          padding: 0.4rem;

          &:hover svg,
          &:hover {
            color: var(--secondary);
            fill: var(--secondary);
          }
        }
      }

      @media (max-width: 768px) {
        p {
          font-size: 0.875rem;
          margin-right: 0.4rem;
        }

        button {
          margin-left: 0px;
        }

        svg {
          display: none;
        }
      }
    }

    li + li {
      margin-left: 1rem;
    }
  }

  &:nth-child(2) {
    margin: 0px;
    padding: 0.875rem;
  }

  span > p {
    font-weight: 200;

    margin-top: 0.875rem;
  }
`;

const Techs = styled.div`
  padding: 7.5rem 0 0 0.875rem;

  position: relative;
  z-index: 1;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--white);
  }

  section {
    display: flex;
    flex-wrap: wrap;

    div {
      cursor: pointer;
      margin: 0px;
      padding: 0.4rem;
      border-radius: 3px;
      background: var(--secondary-dark);

      transition: 0.3s ease;

      &:hover {
        transform: translate3d(0, -3px, 0);
      }
    }

    div:first-child,
    div + div {
      margin-left: 0.4rem;
      margin-top: 0.4rem;
    }
  }

  p {
    color: var(--white);
  }
`;

const Tools = styled.div`
  padding: 7.5rem 0 0 0.875rem;

  position: relative;
  z-index: 1;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--white);
  }

  section {
    display: flex;
    flex-wrap: wrap;

    div {
      cursor: pointer;
      margin: 0px;
      padding: 0.4rem;
      border-radius: 3px;
      background: var(--secondary-dark);

      transition: 0.3s ease;

      &:hover {
        transform: translate3d(0, -3px, 0);
      }
    }

    div:first-child,
    div + div {
      margin-left: 0.4rem;
      margin-top: 0.4rem;
    }
  }

  p {
    color: var(--white);
  }
`;

const SobreMim = () => {
  let bgPhoto = useRef(null);
  let aboutMe = useRef(null);
  let techsList = useRef(null);
  let toolsList = useRef(null);

  //GSAP
  useEffect(() => {
    TweenMax.fromTo(
      bgPhoto,
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, delay: 0.8, opacity: 1, ease: Power3.easeIn },
    );
    TweenMax.fromTo(
      aboutMe,
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, delay: 1, opacity: 1, ease: Power3.easeIn },
    );
    TweenMax.fromTo(
      techsList,
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, delay: 1.2, opacity: 1, ease: Power3.easeIn },
    );
    TweenMax.fromTo(
      toolsList,
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, delay: 1.4, opacity: 1, ease: Power3.easeIn },
    );
  }, []);

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
  }, []); //Typewriter

  return (
    <>
      <Helmet>
        <title>Walter Alcantara | Sobre</title>
      </Helmet>
      <Container>
        <Background
          ref={(element) => {
            bgPhoto = element;
          }}
        />

        <SectionBox>
          <TypeWriter>
            <h1 className="typewriter">sobre mim.</h1>
          </TypeWriter>

          <AboutMe
            ref={(element) => {
              aboutMe = element;
            }}
          >
            <ul>
              {/* 1st child */}
              <li>
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
              </li>

              {/* 2nd child */}
              <li>
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
              </li>

              {/* 3rd child */}
              <li>
                <p>Faça o download do meu</p>
                <button type="button">
                  <a href="./assets/Resume.pdf" download="Resume.pdf">
                    currículo
                    <span>
                      <svg
                        width="20"
                        vid="download"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        fill="#000"
                      >
                        <path
                          d="M472,313v139c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V313H0v139c0,33.084,26.916,60,60,60h392
                      c33.084,0,60-26.916,60-60V313H472z"
                        />

                        <polygon points="352,235.716 276,311.716 276,0 236,0 236,311.716 160,235.716 131.716,264 256,388.284 380.284,264 		" />
                      </svg>
                    </span>
                  </a>
                </button>
              </li>
            </ul>

            <span
              ref={(element) => {
                aboutMe = element;
              }}
            >
              <p style={{ color: 'var(--secondary)' }}>
                Estudante em Análises e Desenvolvimento de Sistemas pelo
                Instituto Federal de São Paulo, Campus de Jacareí.
              </p>
              <p>
                Olá, meu nome é Walter Alcantara, tenho 23 anos, sou casado e me
                considero como um entusiasta e um apaixonado por tecnologia. Amo
                aprender uma nova tecnologia, explorar e descobrir como é
                possível aplicar.
              </p>
            </span>
          </AboutMe>

          <Techs
            ref={(element) => {
              techsList = element;
            }}
          >
            <h2>habilidades</h2>

            <p>Algumas tecnologias que utilizo e estudo no momento.</p>

            <section>
              {techs.map((tech) => {
                console.log(tech.name);

                return (
                  <div key={tech.name}>
                    <img src={tech.img} alt={tech.name} />
                  </div>
                );
              })}
            </section>
          </Techs>

          <Tools
            ref={(element) => {
              toolsList = element;
            }}
          >
            <h2>ferramentas</h2>
            <p>
              Algumas ferramentas que utilizo pra auxiliar no desenvolvimento.
            </p>
            <section>
              {tools.map((tool) => {
                console.log(tool.name);

                return (
                  <div key={tool.name}>
                    <img src={tool.img} alt={tool.name} />
                  </div>
                );
              })}
            </section>
          </Tools>
        </SectionBox>
      </Container>
    </>
  );
};

export default SobreMim;
