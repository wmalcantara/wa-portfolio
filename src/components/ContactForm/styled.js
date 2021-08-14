import styled from 'styled-components';

export const ContactFormContainer = styled.section`
  width: 50%;

  p {
    color: #fff;
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    h1 {
      text-align: left;
    }
  }

`;

export const ContactFormContent = styled.div`
  p {
    margin: 2rem 0;
  }
`;

export const Form = styled.form`
  
  button {
    max-width: 50%;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem 0;
    cursor: pointer;

    border: 0;
    background: var(--secondary);
    color: #fff;
    font-weight: 700;
    font-size: 1.6rem;
    border-radius: .3rem;

    &:hover {
      filter: brightness(.9)
    }

    &:disabled {
      opacity: .2;
      cursor:not-allowed;
    }
  }

  @media (max-width: 768px) {
    button {
      max-width: 100%;
    }
  }
`;

export const Message = styled.div`
  padding: 2rem 0;
  color: #fff;
  text-align: center;

  button {
    max-width: 50%;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem 0;
    cursor: pointer;

    border: 0;
    background: var(--secondary);
    color: #fff;
    font-weight: 700;
    font-size: 1.6rem;
    border-radius: .3rem;

    &:hover {
      filter: brightness(.9)
    }
  }

  .Toastify__toast--info {
    background: #87CC62;
    color: #fff;
    font-weight: 700;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 8px 0px, rgb(0 0 0 / 20%) 0px 6px 15px 0px;

    div[role^="progressbar"] {
      background: #53A547;
    }

    button {
      width: unset;
      padding: unset;
      background: transparent;
      color: #fff;
    }
  }

  .Toastify__toast--error {
    button {
      width: unset;
      padding: unset;
      background: transparent;
    }
  }

  @media (max-width: 768px) {
    button {
      max-width: 100%;
    }
  }
`
