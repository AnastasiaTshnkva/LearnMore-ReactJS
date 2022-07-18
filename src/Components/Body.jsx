import React from "react";
import styled from 'styled-components';
import MemoryCard from "./MemoryCard";
import Buttons from "./Buttons";

const StyledBody = styled.div`
  .body{
    height: calc(100vh - 66px - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    }
`

const MyContext = React.createContext('oops error');

class Body extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    cardName: 'card',
                    cardTranslation: 'translation',
                },
                {
                    cardName: 'card 2',
                    cardTranslation: 'translation 2',
                },
                {
                    cardName: 'card 3',
                    cardTranslation: 'translation 3',
                }
            ],
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
                    <MemoryCard></MemoryCard>
                </div>
            </StyledBody>
        )
    }
}

export default Body;

