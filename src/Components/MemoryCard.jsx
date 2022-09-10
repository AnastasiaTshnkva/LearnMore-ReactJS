import React from "react";
import styled from 'styled-components';
import IcomoonReact from "icomoon-react";
import iconSet from "assets/Icons/selection.json";
import PropTypes from "prop-types";

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
    const handleOClickTurn = () => {
        const cardFrontSide = document.getElementsByName('card-front-side')[0];
        const cardBackSide = document.getElementsByName('card-back-side')[0];
        if(!cardFrontSide.classList.contains('card__front-side__turn') &&
            !cardBackSide.classList.contains('card__back-side__turn')) {
            console.log(true);
            cardFrontSide.classList.add('card__front-side__turn');
            cardBackSide.classList.add('card__back-side__turn');
        } else {
            console.log(false);
            cardFrontSide.classList.remove('card__front-side__turn');
            cardBackSide.classList.remove('card__back-side__turn');
        }
    }

    return (
        <StyledMemoryCard key={props.keyProps} onClick={handleOClickTurn}>
            <div className={'card__front-side'} name={'card-front-side'}>
                { props.buttonVisible &&
                <div className={'buttons-box'}>
                    <button type={'button'} className={'memoryCard__but'}>
                        <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="pencil"/>
                    </button>
                    <button type={'button'} className={'memoryCard__but'}>
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
    keyProps: PropTypes.number.isRequired,
    activeCardName: PropTypes.string.isRequired,
    activeCardDecoding: PropTypes.string.isRequired,
    // onClick: PropTypes.func,
}

export default MemoryCard;