import React from "react";
import styled from 'styled-components';
import MemoryCard from "./MemoryCard/MemoryCard";
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

class Body extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    flipCard() {
        this.setState((state) => {
            return ({cardName: state.cardName + 'add smth'})
        }, () => {
            console.log('try', this.state.name);
        })
    }


    render() {
        return(
            <StyledBody>
                <div className={'body'}>
                    <Buttons innerText={'Add card'}></Buttons>
                    <MemoryCard></MemoryCard>
                </div>
            </StyledBody>

        )
    }
}

export default Body;

