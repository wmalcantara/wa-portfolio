import styled from 'styled-components';
import Link from 'next/link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  padding: 0.875rem;
  margin: 0px;

  li {
    padding: 0.875rem;
    text-transform: lowercase;

    a {
      text-decoration: none;
      color: var(--secondary);
      transition: 0.7s ease;
    }

    a:hover {
      color: var(--white);
      font-weight: 700;
    }

    @media (max-width: 768px) {
      padding: 0rem;

      &:nth-child(1)::after,
      &:nth-child(2)::after,
      &:nth-child(3)::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: var(--secondary);
        margin: 1rem 0 1rem 0;
      }
    }
  }

  li:nth-child(1) {
    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: var(--secondary-dark);
    position: fixed;

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    transition: transform 0.3s ease-in-out;
    padding-top: 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

export default function RightNav({ open }) {
  return (
    <>
      <Ul open={open}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="./sobre">Sobre mim</Link>
        </li>
        <li>
          <Link href="./portfolio">Portfólio</Link>
        </li>
        <li>
          <Link href="./contato">Contato</Link>
        </li>
      </Ul>
    </>
  );
}
