import React from "react";
import styled from 'styled-components';
import MemoryCard from "../../Components/MemoryCard/MemoryCard";
import Buttons from "../../Components/Buttons";
import { CARD_STATUS } from "../../constants/cardStatus";

const StyledBody = styled.div`
  height: calc(100vh - 66px - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => {return props.theme.backgroundColor}};
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
                <Buttons innerText={'Add card'}></Buttons>
                <MemoryCard></MemoryCard>
            </StyledBody>

        )
    }
}

export default Body;

