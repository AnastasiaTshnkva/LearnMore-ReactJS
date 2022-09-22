import React from 'react';
import styled from 'styled-components';
import IcomoonReact from 'icomoon-react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import iconSet from 'assets/Icons/selection.json';
import PropTypes from 'prop-types';
import { REVIEW_BUNDLE_OF_CARDS } from 'constants/reviews/reviewBandleOfCards';
import deleteCardThunk from '../store/thunk/cards/deleteCardThunk';
import patchCardsThunk from '../store/thunk/cards/patchCardsThunk';
import ModalWindowConfirm from 'Components/ModalWindowConfirm';
import ModalWindowUpdate from 'Components/ModalWindowUpdate';

const StyledMemoryCard = styled.div`
    display: flex;
    position: relative;
    min-height: 150px;
    min-width: 250px;
    aspect-ratio: 3/2;
    font-size: 22px;
    line-height: 24px;
    perspective: 1000px;
  .card__front-side, .card__back-side {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 7px ${props => props.theme.cardBorderColor};
    border: 2px solid ${props => props.theme.cardBorderColor};
    border-radius: 10px;
    background-color: ${props => {return props.theme.cardColor}};
    padding-top: 5px;
    position: absolute;
    transition: 0.7s;
    backface-visibility: hidden;
  }
  .card__front-side{
    position: relative;
    .buttons-box {
      display: flex;
      position: absolute;
      justify-self: center;
      justify-content: space-between;
      width: 100%;
      .memoryCard__but {
        background-color: transparent;
        border: none;
      }
    }
    .card__front-side__title {
      display: flex;
      align-items: center;
      height: 100%;
      align-self: center;
    }
  }
  .card__back-side {
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
  }
  .card__front-side__turn {
    transform: rotateY(180deg);
  }
  .card__back-side__turn {
    transform: rotateY(360deg);
  }

`

const MemoryCard = (props) => {
    const { bundleID } = useParams();
    const dispatch = useDispatch();

    const handleOClickTurn = () => {
        const cardFrontSide = document.getElementsByName('card-front-side')[0];
        const cardBackSide = document.getElementsByName('card-back-side')[0];
        if(!cardFrontSide.classList.contains('card__front-side__turn') &&
            !cardBackSide.classList.contains('card__back-side__turn')) {
            cardFrontSide.classList.add('card__front-side__turn');
            cardBackSide.classList.add('card__back-side__turn');
        } else {
            cardFrontSide.classList.remove('card__front-side__turn');
            cardBackSide.classList.remove('card__back-side__turn');
        };
    };

    const handleDeleteButton = (event) => {
        // event.stopPropagation();
        dispatch(deleteCardThunk(props.cardId));
        props.updateCardsData();
        props.updateModalContext(false);
    };

    const handleCloseModalWindow = (event) => {
        // event.stopPropagation();
        props.updateModalContext(false);
    }

    const handleUpdateCardData = (name, description) => {
        const newCardData = {
            cardName: name,
            cardDecoding: description,
        }
        dispatch(patchCardsThunk(newCardData, props.cardId));
        props.updateCardsData();
        props.updateModalContext(false);
    }

    return (
        <StyledMemoryCard key={props.cardId} onClick={handleOClickTurn}>
            <div className={'card__front-side'} name={'card-front-side'}>
                { props.buttonVisible &&
                <div className={'buttons-box'}>
                    <button type={'button'} className={'memoryCard__but'}
                        onClick={() => {
                            const cardName = props.activeCardName;
                            const cardDecoding = props.activeCardDecoding;
                            return props.updateModalContext(
                                <ModalWindowUpdate
                                    blockTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_UPDATE_CARD_TITLE}
                                    name={cardName}
                                    inputNamePlaceholder={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_UPDATE_CARD_NAME_INPUT}
                                    description={cardDecoding}
                                    inputDescriptionPlaceholder={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_UPDATE_CARD_DECODING_INPUT}
                                    updateButtonTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_UPDATE_CARD_BUTTON_TITLE}
                                    handleUpdateFunc={handleUpdateCardData}
                                    closeWindowFunc={handleCloseModalWindow}
                                />
                            )}}>
                        <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="pencil"/>
                    </button>
                    <button type={'button'} className={'memoryCard__but'}
                    onClick={() => {
                         return props.updateModalContext(
                            <ModalWindowConfirm
                                title={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_CONFIRM_TITLE}
                                acceptButtonTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_CONFIRM_ACCEPT_BUTTON_TITLE}
                                acceptFunc={handleDeleteButton}
                                rejectButtonTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_CONFIRM_REJECT_BUTTON_TITLE}
                                rejectFunc={handleCloseModalWindow}
                                />
                        )
                    }
                    }>
                        <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="close"/>
                    </button>
                </div>
                }
                <p className={'card__front-side__title'}>{props.activeCardName}</p>
            </div>
            <div className={'card__back-side'} name={'card-back-side'}>
                <p>{props.activeCardDecoding}</p>
            </div>
        </StyledMemoryCard>

    )
};

MemoryCard.propTypes = {
    activeCardName: PropTypes.string,
    activeCardDecoding: PropTypes.string,
}

export default MemoryCard;