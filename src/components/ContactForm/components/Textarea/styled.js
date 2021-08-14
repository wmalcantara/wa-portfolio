import styled, { css } from "styled-components";

export const TextareaContainer = styled.div`
  position: relative;

  textarea {
    width: 100%;
    padding: .5rem;
    font-size: 2rem;
    color: #fff;
    background: #1B1D20;
    outline: none;
    border: 0;
    border-radius: .3rem;
    height: 140px;
    max-width: 100%;;
    border: 2px solid #0E1013;

    &:focus {
      border: 1px solid #fff;
      border-radius: .3rem;
    }

    &:focus + span,
    &:valid + span {
        top: -8px;
        left: 5px;
        font-size: 1.3rem;
        padding: 0 10px;
        background: #282A2D;
    }

    ${({ error }) => error && css`
      color: #fc5050;
      border: 1px solid #fc5050 !important;
    `}
  }

  span {
    position: absolute;
    top: 8px;
    left: 15px;
    font-size: 1.4rem;
    letter-spacing: .05em;
    pointer-events: none;
    font-weight: bold;
    transition: .4s;
    color: #fff;

    ${({ error }) => error && css`
      color: #fc5050;
    `}
  }
`
