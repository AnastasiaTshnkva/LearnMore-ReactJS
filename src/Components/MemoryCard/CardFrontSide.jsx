import React from "react";
import styled from 'styled-components';


const StyledCardFrontSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
  .memoryCard__edit-but, .memoryCard__cross-but {
    background-color: transparent;
    border: none;
    color: ${props => {return props.theme.textColor}};
  }
  .memoryCard__name {
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
    align-self: center;
  }
`

class CardFrontSide extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledCardFrontSide>
                <button type={'button'} className={'memoryCard__edit-but'}>p</button>
                <h2 className={'memoryCard__name'}>{this.props.cardName}</h2>
                <button type={'button'} className={'memoryCard__cross-but'}>x</button>
            </StyledCardFrontSide>
        )
    }
}

export default CardFrontSide;