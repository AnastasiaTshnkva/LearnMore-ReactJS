import React, { useState } from "react";
import styled from 'styled-components';
import MemoryCard from "../Components/MemoryCard/MemoryCard";
import {MyContext} from "../HOC/GlobalModalProvider";
import CreateMemoryCard from "../HOC/CreateMemoryCard";

const StyledLearningMemoryCards = styled.div`
  min-height: calc(100vh - 80px - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => {return props.theme.backgroundColor}};
`

const LearningMemoryCards = () => {
    let [sayHello, setSayHello] = useState('Hello!');

    return (
        <StyledLearningMemoryCards>
            <div onClick={() => {setSayHello('hi!')}}>
                {sayHello}
            </div>
        </StyledLearningMemoryCards>
    )
}


// class Body extends React.PureComponent {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             cardsData: [
//                 {id: '1', cardName: 'card 1', cardDecoding: 'decoding 1', condition: 'front'},
//                 {id: '2', cardName: 'card 2', cardDecoding: 'decoding 2', condition: 'back'},
//                 {id: '3', cardName: 'card 3', cardDecoding: 'decoding 3', condition: 'front'},
//             ]
//         }
//     }
//
//
//
//     flipCard() {
//         this.setState((state) => {this.cardsData.condition === 'front' ? 'back' : 'front'}, () => {
//             console.log('flip', this.state.cardsData);
//         })
//     }
//
//
//     render() {
//         return(
//             <StyledBody>
//                 <MyContext.Consumer>
//                     {value => (
//                         <button onClick={() => {
//                             value(
//                                 <CreateMemoryCard/>
//                             )
//                         }}>
//                             Add card
//                         </button>
//                     )}
//                 </MyContext.Consumer>
//                 <MemoryCard cardsData={this.state.cardsData}></MemoryCard>
//             </StyledBody>
//
//         )
//     }
// }

export default LearningMemoryCards;

