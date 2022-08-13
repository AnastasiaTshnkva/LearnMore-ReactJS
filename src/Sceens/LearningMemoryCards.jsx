import React, { useState } from "react";
import styled from 'styled-components';
import MemoryCard from "./BundleOfCards/Components/MemoryCard";
import {MyContext} from "../HOC/GlobalModalProvider";
import CreateMemoryCard from "../HOC/CreateMemoryCard";

const StyledLearningMemoryCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px - 150px);
  .cards-box {
    min-height: 60vh;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 85vw;
    border-radius: 10px;
    border-color: ${props => props.theme.cardBorderColor};
    display: flex;
    flex-wrap: wrap;
    //flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => {return props.theme.partBackgroundColor}};
  }
  
`

// const LearningMemoryCardss = () => {
//     let [sayHello, setSayHello] = useState('Hello!');
//
//     return (
//         <StyledLearningMemoryCards>
//             <div onClick={() => {setSayHello('hi!')}}>
//                 {sayHello}
//             </div>
//         </StyledLearningMemoryCards>
//     )
// }


class LearningMemoryCards extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            cardsData: [
                {id: '1', cardName: 'card 1', cardDecoding: 'decoding 1', condition: 'front'},
                {id: '2', cardName: 'card 2', cardDecoding: 'decoding 2', condition: 'back'},
                {id: '3', cardName: 'card 3', cardDecoding: 'decoding 3', condition: 'front'},
                {id: '4', cardName: 'card 3', cardDecoding: 'decoding 3', condition: 'front'},
                {id: '5', cardName: 'card 3', cardDecoding: 'decoding 3', condition: 'front'},
                {id: '6', cardName: 'card 3', cardDecoding: 'decoding 3', condition: 'front'},
            ]
        }
    }



    flipCard() {
        this.setState((state) => {this.cardsData.condition === 'front' ? 'back' : 'front'}, () => {
            console.log('flip', this.state.cardsData);
        })
    }


    render() {
        return(
            <StyledLearningMemoryCards>
                    {value => (
                        <button onClick={() => {
                            value(
                                <CreateMemoryCard/>
                            )
                        }}>
                            Add card
                        </button>
                    )}
                <div className={'cards-box'}>
                    <MemoryCard cardsData={this.state.cardsData}></MemoryCard>
                </div>

            </StyledLearningMemoryCards>

        )
    }
}

export default LearningMemoryCards;

