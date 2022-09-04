import React from "react";
import styled from 'styled-components';
import { CARD_STATUS } from "../../../constants/memoryCards/cardStatus";
import { CARDS_DATA } from "../../../constants/memoryCards/cardsData";
import CardFrontSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";


const StyledMemoryCard = styled.div`
    margin: 5px auto;
    height: 100px;
    width: 200px;
    border: ${props => props.theme.cardBorderColor} 2px solid;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    background-color: ${props => props.theme.cardColor};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    &:active {
      animation-duration: 0.3s;
      animation-name: flip;
    }
  
  @keyframes flip {
    20% {transform: rotate3d(0, 1, 0, 36deg);}
    40% {transform: rotate3d(0, 1, 0, 72deg);}
    60% {transform: rotate3d(0, 1, 0, 108deg);}
    80% {transform: rotate3d(0, 1, 0, 144deg);}
    100% {transform: rotate3d(0, 1, 0, 180deg);}
  }
`

class MemoryCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    //changeCondition() {
    //    return
    //    if(CARDS_DATA.condition === 'front'){
    //        CARDS_DATA.condition = 'back';
    //        console.log(CARDS_DATA.condition)
    //    } else if (CARDS_DATA.condition === 'back') {
    //        CARDS_DATA.condition = 'front';
    //        console.log(CARDS_DATA.condition)
    //    }
    //}

    render() {
        return(
            this.props.cardsData.map((data, index) => {
                console.log(data);
                switch (data.condition) {
                    case 'front' :
                        return (
                            <StyledMemoryCard key={index} onClick={e => {console.log(data.condition)}}>
                                <CardFrontSide cardName={data.cardName}/>
                            </StyledMemoryCard>
                        );
                    case 'back' :
                        return (
                            <StyledMemoryCard key={index}>
                                <CardBackSide cardDecoding={data.cardDecoding}/>
                            </StyledMemoryCard>
                        );
                    default :
                        return (
                            <StyledMemoryCard key={index}>
                                <CardFrontSide cardName={data.cardName}/>
                            </StyledMemoryCard>
                        )
                }
            })
        )
    }
}

export default MemoryCard;


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