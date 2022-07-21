import React from "react";
import styled from 'styled-components';
import { CARD_STATUS } from "../../constants/cardStatus";
import { CARDS_DATA } from "../../constants/cardsData";
import CardFrontSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";


const StyledMemoryCard = styled.div`
    margin: 5px auto;
    height: 100px;
    width: 200px;
    border: #c4efc4 2px solid;
    border-radius: 5px;
    text-align: center;
    //background-color: #e8f8e8;
    background: ${props => {
        switch (props.status) {
          case CARD_STATUS.inProcess :
              return '#e8f8e8';
          case CARD_STATUS.learned :
              return 'red';
          default :
              return '#e8f8e8';
        }
    }};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    &:active {
      background-color: #d1f3d1;
      transform: rotate3d(0, 1, 0, 180deg);
      transition-duration: 0.8s;
    }
`

class MemoryCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }


    changeCondition() {
        return
        if(CARDS_DATA.condition === 'front'){
            CARDS_DATA.condition = 'back';
            console.log(CARDS_DATA.condition)
        } else if (CARDS_DATA.condition === 'back') {
            CARDS_DATA.condition = 'front';
            console.log(CARDS_DATA.condition)
        }

    }

    render() {
        return(
            CARDS_DATA.map((data, index) => {
                console.log(data.condition);
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