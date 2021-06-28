
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import cx from 'classnames';

import CloseIcon from '../../public/assets/icons/closeIcon.svg';

import { useContextAPI } from '../../src/hooks/useContextAPI';

const variants = {
    modal: {
      hidden: {
        opacity: 0,
        y: -20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.9,
        },
      },
    },
  };

const ModalContainer = styled.div`

    display: none;
    opacity: 0;
    
    position: fixed;

    width:300px;
    height:auto;
    left: 50%;
    top: 25%; 
    
    margin-left: -150px;

    background: #1D1D1D;
    color: #fff;

    padding: .5rem;

    border-radius: 3px;

    z-index:100;

    font-family: 'Roboto Mono', monospace;

    
    &.opened {
        display: block;
        opacity: 1;
        
        
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .5rem 0;

        .close-modal {
            background: transparent;
            border: 0;
            cursor: pointer;
            &:hover {
                /* filter: brightness(.8); */
                svg path {
            transition: fill .3s;
                    fill: var(--secondary);
                }
            }
        }
    }

    main {
        display: flex;
        div {
            flex: .7;
        }
        aside {
            flex: .3;
            align-self: center;
            & img {
                margin: 0 auto;
            }
        }
    }

`;

export function Modal({props}) {
    const { img, name, description } = props;

    const { isModalOpen, setIsModalOpen } = useContextAPI();

    function closeModal(){
        setIsModalOpen(false);
    }

    return (
        <ModalContainer 
        className={cx(
            {opened: isModalOpen }
        )}>
            <header>
                <h1>{name}</h1>
                <button className="close-modal" onClick={closeModal}>
                    <CloseIcon width={30} height={30} />
                </button>
            </header>
            <main>
                <aside>
                    <img src={img} alt="" />
                </aside>
                <div>
                    {description}
                </div>
            </main>
        </ModalContainer>
        
    )
}