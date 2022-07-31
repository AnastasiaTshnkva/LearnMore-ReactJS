import React from "react";
import styled from 'styled-components';
import { CARD_STATUS } from "../../constants/memoryCards/cardStatus";
import { CARDS_DATA } from "../../constants/memoryCards/cardsData";
import CardFrontSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";


const StyledMemoryCard = styled.div`
    margin: 5px auto;
    height: 100px;
    width: 200px;
    border: ${props => {return props.theme.cardBorderColor}} 2px solid;
    border-radius: 5px;
    text-align: center;
    background-color: ${props => {return props.theme.cardColor}};
    // background: {props => {
    //     switch (props.status) {
    //       case CARD_STATUS.inProcess :
    //           return '#e8f8e8';
    //       case CARD_STATUS.learned :
    //           return 'red';
    //       default :
    //           return '#e8f8e8';
    //     }
    // }};
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