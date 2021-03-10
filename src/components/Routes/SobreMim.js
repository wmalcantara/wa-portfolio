import React from 'react';
import styled from 'styled-components';

import asojas from '../../';

const SobreMim = () => {
  const Container = styled.div`
    background: var(--dark);
    display: grid;
    grid-template-columns: 1fr 3fr;

    height: 2000px;
  `;

  const SectionBox = styled.div`
    //background-photo
    &::before {
      content: '';
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
    }

    color: #fff;
    grid-column: 2;

    position: absolute;

    width: 200px;

    top: 200px;
    right: 0px;
  `;

  return (
    <Container>
      <SectionBox>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
      </SectionBox>
    </Container>
  );
};

export default SobreMim;
