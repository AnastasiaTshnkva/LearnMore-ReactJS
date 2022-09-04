import React from "react";
import styled from 'styled-components';

const StyledCardBackSide = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  .memoryCard__decoding {
    font-size: 16px;
    line-height: 18px;
  }
`

const CardBackSide = (props) => {
    return(
        <StyledCardBackSide>
            <p className={'memoryCard__decoding'}>{props.cardDecoding}</p>
        </StyledCardBackSide>
    )
}

export default CardBackSide;

const StyledBundleOfCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 0.3fr;
  width: 100vw;
  min-height: calc(100vh - 80px - 50px);
  .bundle-part {
    background-color: ${props => props.theme.descriptionPartColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
    .bundle__title {
      display: block;
      margin-top: 20px;
      font-size: 22px;
      line-height: 26px;
      font-weight: 600;
      text-align: center;
    }
    .bundle__description {
      display: block;
      margin-top: 20px;
    }
    .cards-counter {
      display: block;
      margin-top: 10px;
      font-size: 12px;
      line-height: 14px;
      .counter {
        font-weight: 600;
      }
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    .cards__box {
      min-height: 60vh;
      margin: 20px 30px;
      width: 45vw;
      border-radius: 10px;
      background-color: ${props => {return props.theme.partBackgroundColor}};
      box-shadow: inset 0 0 7px ${props => props.theme.cardBorderColor};
    }
    .interaction {
      display: flex;
      justify-content: center;
      align-items: baseline;
      padding-left: 30px;
      padding-right: 30px;
      .counter {
        margin-left: 15px;
        margin-right: 15px;
      }
    }
    .cards__arr {
      min-height: 50vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .card {
        min-height: 150px;
        min-width: 250px;
        margin: 25px 15px;
        border-radius: 5px;
        display: flex;
        padding: 5px;
        background-color: ${props => {return props.theme.cardColor}};
        box-shadow: 0 0 7px ${props => props.theme.cardBorderColor};
        font-size: 22px;
        line-height: 24px;
        aspect-ratio: 3/2;
      }
      .card__front-side {
        display: flex;
        justify-content: space-between;
        align-items: start;
        width: 100%;
        border: 2px solid ${props => props.theme.cardBorderColor};
        transition: transform 0.8s;
        transform-style: preserve-3d;
        padding-top: 5px;
        .memoryCard__but {
          background-color: transparent;
          border: none;
        }
        .card__front-side__title {
          align-self: center;
        }
      }
      .card__back-side {
        display: none;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
`