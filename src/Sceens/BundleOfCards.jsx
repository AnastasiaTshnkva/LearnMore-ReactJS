import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { REVIEW_BUNDLE_OF_CARDS } from 'constants/reviews/reviewBandleOfCards';
import AddButton from 'Components/AddButton';
import {
    showCurrentBundleDataIsLoading,
    showCurrentBundleDataError,
    showCurrentBundleDataFromStore,
    showCardsDataIsLoading,
    showCardsDataError,
    showCardsDataFromStore,
} from 'store/selectors/selectors';
import MemoryCard from 'Components/MemoryCard';
import { ROUTES_NAMES } from 'constants/routes/routes';
import getCurrentBundleThunk from 'store/thunk/bundles/getCurrentBundleThunk';
import getCardsThunk from 'store/thunk/cards/getCardsThunk';
import deleteCurrentCard from 'store/thunk/cards/deleteCardThunk';
import ModalWindowCreate from 'Components/ModalWindowCreate';
import withModalContext from 'HOC/withModalContext';
import postNewCardThunk from 'store/thunk/cards/postNewCardThunk';

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
    }
  }
`

const BundleOfCards = (props) => {
    const dispatch = useDispatch();
    const { categoryID } = useParams();
    const { bundleID } = useParams();
    const [cardsData, setCardsData] = useState([]);
    const [currentBundleData, setCurrentBundleData] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [cardName, setCardName] = useState('');
    const [cardDecoding, setCardDecoding] = useState('');

    const currentBundleIsLoading = useSelector(showCurrentBundleDataIsLoading);
    const currentBundleDataError = useSelector(showCurrentBundleDataError);
    const currentBundleDataFromStore = useSelector(showCurrentBundleDataFromStore);
    const cardsDataIsLoading = useSelector(showCardsDataIsLoading);
    const cardsDataError = useSelector(showCardsDataError);
    const cardsDataFromStore = useSelector(showCardsDataFromStore);

    useEffect(() => {
        dispatch(getCurrentBundleThunk(bundleID));
        dispatch(getCardsThunk(bundleID));
    }, []);

    useEffect(() => {
        setCurrentBundleData(currentBundleDataFromStore[0]);
    }, [currentBundleDataFromStore]);

    useEffect(() => {
        setCardsData(cardsDataFromStore);
    }, [cardsDataFromStore]);

    const handleOnClickNextCardButton = (event) => {
        if(activeCardIndex < cardsData.length - 1) {
            setActiveCardIndex(activeCardIndex + 1);
        } else {
            setActiveCardIndex(0);
        }
    };

    const handleOnClickPreviousCardButton = (event) => {
        if(activeCardIndex > 0) {
            setActiveCardIndex(activeCardIndex - 1);
        } else {
            setActiveCardIndex(cardsData.length - 1);
        }
    };

    const getCurrentBundle = () => {
        if(currentBundleIsLoading) {return <div>Bundle loading...</div>}
        if(currentBundleDataError) {
            console.error(currentBundleDataError);
            return <div>Ops! Something went wrong</div>
        }
        if (currentBundleData) {
            return (
                <div className={'bundle-data'}>
                    <p className={'bundle__title'}>{currentBundleData.bundleName}</p>
                    <p className={'bundle__description'}>{currentBundleData.bundleDescription}</p>
                </div>
            );
        }
        return <div>No data</div>
    };

    const getCurrentCard = (index) => {
        if(cardsDataIsLoading) {return <div>cards are loading...</div>}
        if(cardsDataError) {
            console.error(cardsDataError);
            return <div>Ops! Something went wrong</div>
        }
        if (!!cardsData.length){
            const activeCard = cardsData[index];

            return (
                <MemoryCard activeCardName={activeCard.cardName}
                activeCardDecoding={activeCard.cardDecoding} buttonVisible={true}
                cardId={activeCard.id} updateCardsData={updateCardsData}
                />
            );
        }
        return <div>No data</div>
    };

    const handleAddCard = (newCardName, newCardDecoding) => {
        const newCard = {
            id: uuidv4(),
            cardID: Date.now(),
            cardName: newCardName,
            cardDecoding: newCardDecoding,
            bundleID: bundleID,
            categoryID: categoryID,
            answersCounter: 0,
        };
        dispatch(postNewCardThunk(cardsData, newCard, bundleID));
        dispatch(getCardsThunk(bundleID));
        setCardName('');
        setCardDecoding('');
        props.updateModalContext(false);
        setActiveCardIndex(cardsData.length);
    }

    const updateCardsData = () => {
        dispatch(getCardsThunk(bundleID));
        setActiveCardIndex(0);
    };

    return (
        <StyledBundleOfCards>
            <div></div>
            <div className={'bundle-part'}>
                <div className={'bundle-data'}>
                    {getCurrentBundle()}
                    <p className={'cards-counter'}>{REVIEW_BUNDLE_OF_CARDS.NUMBER_OF_CARDS}<span className={'counter'}>{cardsData.length}</span></p>
                </div>
                <AddButton type={'button'} title={REVIEW_BUNDLE_OF_CARDS.ADD_NEW_CARD_BUTTON_INNER_TEXT}
                           onClickProps={() => {
                               props.updateModalContext(
                                   <ModalWindowCreate
                                       blockTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_TITLE}
                                       inputNamePlaceholder={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_NAME_INPUT_PLACEHOLDER}
                                       inputDescriptionPlaceholder={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_DECODING_INPUT_PLACEHOLDER}
                                       updateModalContext={props.updateModalContext}
                                       handleAddFunc={handleAddCard}
                                       addButtonTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_ADD_BUTTON}/>
                               )
                           }}/>
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
                <Link to={`${ROUTES_NAMES.CATEGORIES}/${categoryID}/bundle/${bundleID}/studying`}>
                    <AddButton type={'button'} title={REVIEW_BUNDLE_OF_CARDS.START_LEARNING_BUTTON_INNER_TEXT}/>
                </Link>

            </div>
        </StyledBundleOfCards>
    )
}

export default withModalContext(BundleOfCards);