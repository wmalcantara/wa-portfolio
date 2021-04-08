import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import MenuBar from './Nav/MenuBar';

import techs from '../techs.json';
import tools from '../tools.json';

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
        svg {
          cursor: pointer;
          height: 40px;
          transition: 0.7s ease;
          fill: var(--secondary);
          path {
            transition: 0.7s ease;
          }
          &:hover {
            transform: translate3d(0, -3px, 0);
          }
          &:hover path {
            fill: var(--white);
          }
        }
        //space between each icon
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

export default function Sobre() {
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
      <Head>
        <title>WA | Sobre</title>
      </Head>

      <MenuBar />

      <Main>
        <div className="bg-photo" />

        <div className="infos">
          <h1 className="typewriter-title">sobre mim.</h1>

          <div className="about-me">
            <div className="social-box">
              <a
                href="https://www.github.com/wmalcantara"
                rel="noreferrer"
                target="_blank"
              >
                <svg viewBox="0 0 438.549 438.549">
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

              <a
                href="https://www.linkedin.com/in/walteralcantara"
                rel="noreferrer"
                target="_blank"
              >
                <svg viewBox="0 0 510 510">
                  <path
                    id="li"
                    d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
  M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9
  S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204
  V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z"
                  />
                </svg>
              </a>
            </div>

            <div className="first-folder">
              <p>Faça o download do meu</p>
              <button type="button">
                <a href="./Resume.pdf" download="Resume.pdf">
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
                considero como um entusiasta e um apaixonado por tecnologia. Amo
                aprender uma nova tecnologia, explorar e descobrir como é
                possível aplicar.
              </p>
            </div>
          </div>

          <div className="tech-list">
            <h2>habilidades</h2>

            <p>Algumas tecnologias que utilizo e estudo no momento.</p>

            <section>
              {techs.map((tech, index) => {
                return (
                  <>
                    <div key={index}>
                      <img src={tech.img} alt={tech.name} />
                    </div>
                  </>
                );
              })}
            </section>
          </div>

          <div className="tool-list">
            <h2>ferramentas</h2>

            <p>Algumas ferramentas que me auxiliam no desenvolvimento.</p>

            <section>
              {tools.map((tool) => {
                return (
                  <div key={tool.name}>
                    <img src={tool.img} alt={tool.name} />
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </Main>
    </>
  );
}
