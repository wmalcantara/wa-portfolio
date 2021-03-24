import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const UnderConstruction = styled.div`
  color: var(--white);
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  h1 {
    grid-column: 2;
    padding-top: 6rem;
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

  h2 {
    grid-column: 2;
    padding-top: 6rem;
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    h1 {
      grid-column: 1;
      font-size: 2.5rem;
      padding: 3.5rem 0.875rem;
    }
  }
`;

const Portfolio = () => {
  //Typewriter
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
        <title>Walter Alcantara | Portfólio</title>
      </Helmet>
      <UnderConstruction>
        <h1 className="typewriter">portfólio em construção...</h1>
      </UnderConstruction>
    </>
  );
};

export default Portfolio;
