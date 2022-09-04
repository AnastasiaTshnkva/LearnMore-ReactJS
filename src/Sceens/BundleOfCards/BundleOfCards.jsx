import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import IcomoonReact from "icomoon-react";
import iconSet from "assets/Icons/selection.json";
import {
    fetchBundleOfCardsData,
    fetchCurrentBundleData,
} from "api/fakeServer/Api";
import { REVIEW_BUNDLE_OF_CARDS } from "constants/reviews/reviewBandleOfCards";
import AddButton from "Components/AddButton";
import {useDispatch, useSelector} from "react-redux";
import {
    showCurrentBundleDataIsLoading,
    showCurrentBundleDataError,
    showCurrentBundleDataFromStore,
    showCardsDataIsLoading,
    showCardsDataError,
    showCardsDataFromStore,
} from "store/selectors/selectors";
import {
    setCurrentBundleRequestAction,
    getCurrentBundleSuccessAction,
    getCurrentBundleFailureAction,
    setBundleOfCardsRequestAction,
    getBundleOfCardSuccessAction,
    getBundleOfCardFailureAction,
} from 'store/actions/bundleOfCardsCreators';
import {setCategoriesRequestAction} from "../../store/actions/categoriesActionCreators";

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
    .cards-counter {
      display: block;
      margin-top: 10px;
      font-size: 12px;
      line-height: 14px;
      .counter {
        font-weight: 600;
      }
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
      background-color: ${props => {return props.theme.partBackgroundColor}};
      box-shadow: inset 0 0 7px ${props => props.theme.cardBorderColor};
    }
    .interaction {
      display: flex;
      justify-content: center;
      align-items: baseline;
      padding-left: 30px;
      padding-right: 30px;
      .counter {
        margin-left: 15px;
        margin-right: 15px;
      }
    }
    .cards__arr {
      min-height: 50vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .card {
        min-height: 150px;
        min-width: 250px;
        margin: 25px 15px;
        border-radius: 5px;
        display: flex;
        padding: 5px;
        background-color: ${props => {return props.theme.cardColor}};
        box-shadow: 0 0 7px ${props => props.theme.cardBorderColor};
        font-size: 22px;
        line-height: 24px;
        aspect-ratio: 3/2;
      }
      .card__front-side {
        display: flex;
        justify-content: space-between;
        align-items: start;
        width: 100%;
        border: 2px solid ${props => props.theme.cardBorderColor};
        transition: transform 0.8s;
        transform-style: preserve-3d;
        padding-top: 5px;
        .memoryCard__but {
          background-color: transparent;
          border: none;
        }
        .card__front-side__title {
          align-self: center;
        }
      }
      .card__back-side {
        display: none;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
`

const BundleOfCards = (props) => {
    const dispatch = useDispatch();
    const { bundleID } = useParams();
    const [cardsData, setCardsData] = useState([]);
    const [currentBundleData, setCurrentBundleData] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const currentBundleIsLoading = useSelector(showCurrentBundleDataIsLoading);
    const currentBundleDataError = useSelector(showCurrentBundleDataError);
    const currentBundleDataFromStore = useSelector(showCurrentBundleDataFromStore);
    const cardsDataIsLoading = useSelector(showCardsDataIsLoading);
    const cardsDataError = useSelector(showCardsDataError);
    const cardsDataFromStore = useSelector(showCardsDataFromStore);

    const getCurrentBundleFromServer = () => {
        fetchCurrentBundleData(bundleID)
            .then(({data}) => {
                dispatch(getCurrentBundleSuccessAction(data));
            })
            .catch((error) => {
                dispatch(getCurrentBundleFailureAction(error))
            });
    };

    useEffect(() => {
        dispatch(setCurrentBundleRequestAction());
        getCurrentBundleFromServer()
    }, []);

    useEffect(() => {
        setCurrentBundleData(currentBundleDataFromStore[0])
    }, [currentBundleDataFromStore]);

    console.log('currentBundleData is' ,currentBundleData)

    const getCardsDataFromServer = () => {
        fetchBundleOfCardsData(bundleID)
            .then(({data}) => {
                dispatch(getBundleOfCardSuccessAction(data));
            })
            .catch((error) => {
                dispatch(getBundleOfCardFailureAction(error))
            })
    }

    useEffect(() => {
        dispatch(setBundleOfCardsRequestAction());
        getCardsDataFromServer()
    }, []);

    useEffect(() => {
        setCardsData(cardsDataFromStore)
    }, [cardsDataFromStore]);

    console.log('cardsData is',cardsData);

    const handleOnClickNextCardButton = (event) => {
        if(activeCardIndex < cardsData.length - 1) {
            setActiveCardIndex(activeCardIndex + 1);
            console.log('click next');
        } else {
            setActiveCardIndex(0);
        }
    };

    const handleOnClickPreviousCardButton = (event) => {
        if(activeCardIndex > 0) {
            setActiveCardIndex(activeCardIndex - 1);
            console.log('click previous');
        } else {
            setActiveCardIndex(0);
        }
    };

    const getCurrentBundle = () => {
        if(currentBundleIsLoading) {return <div>Bundle loading...</div>}
        if(currentBundleDataError) {
            console.error(currentBundleDataError);
            return <div>No data</div>
        }
        if(currentBundleDataFromStore) {
        console.log(currentBundleData);
        //     return (
        //         <div className={'bundle-data'}>
        //             <p className={'bundle__title'}>{currentBundleData.bundleName}</p>
        //             <p className={'bundle__description'}>{currentBundleData.bundleDescription}</p>
        //         </div>
        //     );
        }
    };

    const getCurrentCard = (index) => {
        if(cardsDataIsLoading) {return <div>cards are loading...</div>}
        if(cardsDataError) {
            console.error(cardsDataError);
            return <div>no cards yet</div>
        }
        if(cardsData) {
            const activeCard = cardsData[index];
            console.log(activeCard);
            // return (
            //     <div key={index} className={'card'}>
            //         <div className={'card__front-side'}>
            //             <button type={'button'} className={'memoryCard__but'}>
            //                 <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="pencil"/>
            //             </button>
            //             <p className={'card__front-side__title'}>{activeCard.cardName}</p>
            //             <button type={'button'} className={'memoryCard__but'}>
            //                 <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="close"/>
            //             </button>
            //         </div>
            //         <div className={'card__back-side'}>
            //             <p>{activeCard.cardDecoding}</p>
            //         </div>
            //     </div>
            // );
        };
    };

    return (
        <StyledBundleOfCards>
            <div></div>
            <div className={'bundle-part'}>
                <div className={'bundle-data'}>
                    {getCurrentBundle()}
                    <p className={'cards-counter'}>{REVIEW_BUNDLE_OF_CARDS.NUMBER_OF_CARDS}<span className={'counter'}>{cardsData.length}</span></p>
                </div>
                <AddButton type={'button'} title={REVIEW_BUNDLE_OF_CARDS.ADD_NEW_CARD_BUTTON_INNER_TEXT}/>
            </div>
            <div className={'cards'}>
                <div className={'cards__box'}>
                    <div className={'cards__arr'}>
                        {getCurrentCard(activeCardIndex)}
                    </div>
                    <div className={'interaction'}>
                        <AddButton type={'button'} title={REVIEW_BUNDLE_OF_CARDS.PREVIOUS_BUTTON_INNER_TEXT}
                                   onClickProps={handleOnClickPreviousCardButton}/>
                        <p className={'counter'}>{activeCardIndex + 1}/{cardsData.length}</p>
                        <AddButton type={'button'} title={REVIEW_BUNDLE_OF_CARDS.NEXT_BUTTON_INNER_TEXT}
                                   onClickProps={handleOnClickNextCardButton}/>
                    </div>

                </div>
                <AddButton type={'button'} title={REVIEW_BUNDLE_OF_CARDS.START_LEARNING_BUTTON_INNER_TEXT}/>
            </div>
        </StyledBundleOfCards>
    )
}

export default BundleOfCards;