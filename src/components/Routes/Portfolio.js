import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const UnderConstruction = styled.div`
  color: var(--white);
  h1 {
    text-align: center;
    font-size: 4rem;
  }
`;

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Walter Alcantara | Portfólio</title>
      </Helmet>
      <UnderConstruction>
        <h1>Em construção...</h1>
      </UnderConstruction>
    </>
  );
};

export default Portfolio;
