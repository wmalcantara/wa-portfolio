import React from 'react';
import styled from 'styled-components';

const SobreMim = () => {
  const SectionContainer = styled.section`
    color: var(--white);
    width: 100%;
    max-width: 960px;

    margin: 0 auto;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div + div {
      margin-left: 1rem;
      background: #f00;
    }
  `;

  const DivBoxText = styled.div`
    flex: 0.4;

    font-size: 1rem;
    font-family: 'Prata';
  `;

  const DivBoxImg = styled.div`
    object-fit: cover;
    flex: 0.6;

    img {
      border-radius: 5px;
    }
  `;

  return (
    <>
      <SectionContainer>
        <DivBoxText>
          <p>
            Meu nome é Walter Alcantara, tenho 23 anos e sou estudante de
            Análise e Desenvolvimento de sistemas pelo Instituto Federal de São
            Paulo, pelo Campus de Jacareí.
          </p>
          <br />
          <p>
            Entusiasta e um apaixonado pela tecnologia, amo poder aprender e
            explorar como aplicar qualquer linguagem, lib e/ou framework.
          </p>
          <br />
          <p>
            Atualmente, estou estudando muito durante todos os dias um pouco de
            React.js.
          </p>
        </DivBoxText>
        <DivBoxImg>
          <img src="./assets/img/code-1.jpg" alt="" />
        </DivBoxImg>
      </SectionContainer>
      <SectionContainer></SectionContainer>
    </>
  );
};

export default SobreMim;
