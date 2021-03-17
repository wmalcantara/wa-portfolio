import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--dark);

  display: grid;
  grid-template-columns: 1fr 2fr;

  height: 1000px;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--white);
  }
`;

const SectionBox = styled.section`
  grid-column: 2;
  width: 100%;
`;

const Contato = () => {
  return (
    <>
      <Container>
        <SectionBox>
          <h1>contato.</h1>
        </SectionBox>
      </Container>
    </>
  );
};

export default Contato;
