import { useContextAPI } from '../../hooks/useContextAPI';

import CloseIcon from '../../assets/icons/closeIcon.svg';

import { Overlay, ModalContainer } from './styled';

export default function Modal({ props = {} }) {
  const { img, name, description } = props;
  const { isModalOpen, setIsModalOpen } = useContextAPI();

  return (
    <>
      <Overlay isModalOpen={isModalOpen} />
      <ModalContainer isModalOpen={isModalOpen}>
        <header>
          <h1>{name}</h1>
          <button className="close-modal" onClick={() => setIsModalOpen(false)}>
            <CloseIcon width={30} height={30} />
          </button>
        </header>
        <main>
          <aside>
            <img src={img} alt={name} />
          </aside>
          <div>{description}</div>
        </main>
      </ModalContainer>
    </>
  );
}
