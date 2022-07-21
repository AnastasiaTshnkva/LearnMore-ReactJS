import React from "react";
import styled from 'styled-components';
import { CARD_STATUS } from "../../constants/cardStatus";
import { CARDS_DATA } from "../../constants/cardsData";


const StyledCardFrontSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
    .memoryCard__edit-but, .memoryCard__cross-but {
        background-color: transparent;
        border: none;
        color: rgb(70, 84, 70);
      }
      .memoryCard__name {
        font-size: 18px;
        line-height: 20px;
        font-weight: 400;
        align-self: center;
      }
    }
`

class CardFrontSide extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledCardFrontSide>
                <div className={'memoryCard__front-side'}>
                    <button type={'button'} className={'memoryCard__edit-but'}>p</button>
                    <h2 className={'memoryCard__name'}>{this.props.cardName}</h2>
                    <button type={'button'} className={'memoryCard__cross-but'}>x</button>
                </div>
            </StyledCardFrontSide>
        )
    }
}

export default CardFrontSide;