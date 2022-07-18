import React from "react";
import styled from 'styled-components';

const StyledMemoryCard = styled.div`
  .memoryCard {
    margin: 5px auto;
    height: 100px;
    width: 200px;
    border: #c4efc4 2px solid;
    border-radius: 5px;
    text-align: center;
    background-color: #e8f8e8;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    //&:hover {
    //  background-color: #d1f3d1;
    //  transform: rotate3d(0, 1, 0, 180deg);
    //  transition-duration: 0.8s;
    //}
    .memoryCard__front-side {
      display: flex;
      justify-content: space-between;
      align-items: start;
      width: 100%;
      height: 100%;
      .memoryCard__edit-but, .memoryCard__cross-but {
        background-color: transparent;
        border: none;
        color: rgb(70, 84, 70);
      }
      .memoryCard__name {
        font-size: 18px;
        line-height: 20px;
        font-weight: 400;
        align-self: center;
      }
    }
    .memoryCard__back-side {
      display: none;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: 100%;
      .memoryCard__translation {
        font-size: 16px;
        line-height: 18px;
      }
    }
    .visible {
      display: flex;
      position: relative;
    }
    .hidden {
      display: none;
      position: absolute;
    }
  }
`

class MemoryCard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {cardName: 'card 1',
                    cardTranslation: 'translation 1',},
                {cardName: 'card 2',
                    cardTranslation: 'translation 2',},
                {cardName: 'card 3',
                    cardTranslation: 'translation 3',}],
        }
    }


    render() {
        return(
            <StyledMemoryCard>
                {this.state.cardData.map((data, index) => {
                    console.log(data);
                    return(
                            <div className={'memoryCard'} key={index} onClick={(e) => {this.props.flipCard()}}>
                                <div className={'memoryCard__front-side'}>
                                    <button type={'button'} className={'memoryCard__edit-but'}>p</button>
                                    <h2 className={'memoryCard__name'}>{data.cardName}</h2>

                                    <button type={'button'} className={'memoryCard__cross-but'}>x</button>
                                </div>
                                <div className={'memoryCard__back-side'}>
                                    <p className={'memoryCard__translation'}>{data.cardTranslation}</p>
                                </div>
                            </div>
                        )
                })}

            </StyledMemoryCard>

        )
    }
}

export default MemoryCard;