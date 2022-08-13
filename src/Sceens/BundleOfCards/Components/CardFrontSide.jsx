import React from "react";
import styled from 'styled-components';
import iconSet from "../../../assets/Icons/selection.json";
import IcomoonReact from "icomoon-react";


const StyledCardFrontSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 100px;
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

const CardFrontSide = (props) => {
    return(
        <StyledCardFrontSide>
            <button type={'button'} className={'memoryCard__edit-but'}>
                <IcomoonReact iconSet={iconSet} color="#000" size={15} icon="pencil"/>
            </button>
            <h2 className={'memoryCard__name'}>{props.cardName}</h2>
            <button type={'button'} className={'memoryCard__cross-but'}>
                <IcomoonReact iconSet={iconSet} color={props.color} size={15} icon="close"/>
            </button>
        </StyledCardFrontSide>
    )
}

export default CardFrontSide;