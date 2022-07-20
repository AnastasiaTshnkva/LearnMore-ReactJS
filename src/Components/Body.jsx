import React from "react";
import styled from 'styled-components';
import MemoryCard from "./MemoryCard";
import Buttons from "./Buttons";
import { CARD_STATUS } from "../constants/cardStatus";

const StyledBody = styled.div`
  .body{
    height: calc(100vh - 66px - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    }
`

// export const MyContext = React.createContext('error default value');

class Body extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {cardName: 'card 1',
                    cardDecoding: 'decoding 1',},
                {cardName: 'card 2',
                    cardDecoding: 'decoding 2',},
                {cardName: 'card 3',
                    cardDecoding: 'decoding 3',}],
        }
    }

    flipCard() {
        this.setState((state) => {
            return ({name: state.name + 'add smth'})
        }, () => {
            console.log('try', this.state.name);
        })
    }

    render() {
        return(
            <StyledBody>
                <div className={'body'}>
                    <Buttons innerText={'Add card'}></Buttons>
                    <MemoryCard status={CARD_STATUS.learned}></MemoryCard>
                </div>
            </StyledBody>
        )
    }
}


export default Body;

