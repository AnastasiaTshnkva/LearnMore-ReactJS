import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/Icons/selection.json";
import {fetchCardsData} from "../../api/fakeServer/cardsApi";

const StyledBundleOfCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 0.3fr;
  width: 100vw;
  min-height: calc(100vh - 80px - 50px);
  .bundle-part {
    background-color: ${props => props.theme.descriptionPartColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
    .bundle__title {
      display: block;
      margin-top: 20px;
      font-size: 22px;
      line-height: 26px;
      font-weight: 600;
      text-align: center;
    }
    .bundle__description {
      display: block;
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    .cards__box {
      min-height: 60vh;
      margin: 20px 30px;
      width: 45vw;
      border-radius: 10px;
      box-shadow: inset 0 0 7px ${props => props.theme.cardBorderColor};
    }
    .cards__arr {
      min-height: 50vh;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      background-color: ${props => {return props.theme.partBackgroundColor}};
      .card {
        min-height: 100px;
        margin-top: 25px;
        margin-bottom: 25px;
        border-radius: 10px;
        border-color: ${props => props.theme.cardBorderColor};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: ${props => {return props.theme.cardColor}};
      }
      .card__front-side {
        display: flex;
        justify-content: space-between;
        align-items: start;
        height: 100px;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        .memoryCard__but {
          background-color: transparent;
          border: none;
        }
      .card__back-side {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      }
    }
  }
  .button {
    background-color: ${props => props.theme.buttonColor};
    padding: 7px;
    color: ${props => props.theme.lightTextColor};
    font-size: 18px;
    line-height: 22px;
    border: none;
    border-radius: 3px;

    &:hover {
      box-shadow: 0 0 7px ${props => props.theme.buttonHoverShadow};
    }

    &:active {
      background-color: ${props => props.theme.buttonColor};
    }
  }
`

const BundleOfCards = (props) => {
    const [cardsData, setCardsData] = useState([]);
    const bundleData = {id: '1', bundlesName: 'xcvbnm', description: 'dfghjkl dfghj sdfghj sdfgh cvbn sdfghjj sdfghjkl sdfghj dfghj d dfgh',}

    useEffect(() => {
        fetchCardsData().then(({data}) => setCardsData(data))
    }, [])


    const [activeIndex, setActiveIndex] = useState(0);
    //
    // setActiveIndex((current) => {
    //     const res = current === bundleCards.length - 1
    // })



    return (
        <StyledBundleOfCards>
            <div></div>
            <div className={'bundle-part'}>
                <div className={'bundle-data'}>
                    <p className={'bundle__title'}>{bundleData.bundlesName}</p>
                    <p className={'bundle__description'}>{bundleData.description}</p>
                </div>
                <button type={'button'} className={'button'}>+New card</button>
            </div>
            <div className={'cards'}>
                <div className={'cards__box'}>
                    <div className={'cards__arr'}>
                        {cardsData.map((data, index) => {
                            return (
                                <div key={index} className={'card'}>
                                    <div className={'card__front-side'}>
                                        <button type={'button'} className={'memoryCard__but'}>
                                            <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="pencil"/>
                                        </button>
                                        <p>{data.cardName}</p>
                                        <button type={'button'} className={'memoryCard__but'}>
                                            <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="close"/>
                                        </button>
                                    </div>
                                    <div className={'card__back-side'}>
                                        <p>{data.cardDecoding}</p>
                                    </div>
                                </div>
                            )})}
                    </div>
                    <div className={'interaction'}>
                        <button type={'button'} className={'button'}>Previous</button>
                        <p className={'counter'}>{activeIndex + 1}/{cardsData.length}</p>
                        <button type={'button'} className={'button'}>Next</button>
                    </div>

                </div>
                <button type={'button'} className={'button'}>To learn</button>
            </div>
        </StyledBundleOfCards>
    )

}

export default BundleOfCards;
