import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import background from '../../assets/background.jpg';

const Home = () => {
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
    display: block;

    text-align: left;
    padding: 0.875rem;

    max-width: 25%;

    position: absolute;
    z-index: 1;

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
  `;

  const PersonalPhoto = styled.div`
    display: block;

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

  return (
    <SectionContainer>
      <PresentationBox>
        <TypeWriterBox>
          <h1 className="presentation">Olá, me chamo Walter Alcantara.</h1>
        </TypeWriterBox>
        <PersonalPhoto>
          <img src={background} alt="Walter's photo" />
        </PersonalPhoto>

        <Link to="/contato">Contato</Link>
      </PresentationBox>
    </SectionContainer>
  );
};

export default Home;
