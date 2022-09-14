import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { useNavigate, useParams} from 'react-router-dom';
import MemoryCard from 'Components/MemoryCard';
import {useDispatch, useSelector} from "react-redux";
import {showCardsDataError, showCardsDataFromStore, showCardsDataIsLoading} from "store/selectors/selectors";
import {fetchBundleOfCardsData} from "api/fakeServer/Api";
import {
    getBundleOfCardFailureAction,
    getBundleOfCardSuccessAction,
    setBundleOfCardsRequestAction
} from "store/actions/bundleOfCardsCreators";
import {ROUTES_NAMES} from "constants/routes/routes";
import getCardsThunk from "../store/thunk/cards/getCardsThunk";

const StyledStudyPage = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
   .title {
      display: block;
      margin-top: 20px;
      margin-bottom: 30px;
      font-size: 26px;
      line-height: 28px;
      text-align: center;
    }
  .cards-box {
    position: relative;
    max-width: 40%;
  }
  .buttons-box {
    margin-top: 30px;
    .button  {
      padding: 10px;
      border-radius: 5px;
      font-size: 20px;
      line-height: 22px;
      margin-right: 15px;
      margin-left: 15px;
      min-width: 155px;
      border: 2px solid transparent;
      color: ${props => props.theme.lightTextColor};
      &:hover {
        box-shadow: 0 0 5px ${props => props.theme.iDoNotKnowHoverButtonColor};
      }
    }
    .i-know {
      background-color: ${props => props.theme.buttonColor};
    }
    .i-do-not-know {
      background-color: ${props => props.theme.iDoNotKnowButtonColor};
    }
  }
`

const StudyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { bundleID } = useParams();
    const { categoryID } = useParams();
    const [cardsData, setCardsData] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [mixedCardsArr, setMixedCardsArr] = useState([]);

    const cardsDataIsLoading = useSelector(showCardsDataIsLoading);
    const cardsDataError = useSelector(showCardsDataError);
    const cardsDataFromStore = useSelector(showCardsDataFromStore);

    useEffect(() => {
        dispatch(getCardsThunk(bundleID))
    },[]);

    useEffect(() => {
        setCardsData(cardsDataFromStore);
        setMixedCardsArr(cardsDataFromStore.slice().sort(() => Math.random() -0.5));
    }, [cardsDataFromStore]);

    const handleIKnowButton = () => {
        if(!!mixedCardsArr.length && activeCardIndex < mixedCardsArr.length - 1) {
            const currentCardID = mixedCardsArr[activeCardIndex].cardID;
            const newCardsData = cardsData.map((card) => {
                if(card.cardID === currentCardID) {
                   card.answersCounter += 1;
                }
                return card;
            });
            const newMixedArr = mixedCardsArr.filter(card => card.cardID !== currentCardID);
            setMixedCardsArr(newMixedArr);
            setCardsData(newCardsData);
        }
        if (mixedCardsArr.length === 1) {
            navigate(-1);
        } else {
            setActiveCardIndex(0);
        }
    }

    console.log('mixedCardsArr is', mixedCardsArr);

    const handleIDoNotKnow = () => {
        if(activeCardIndex < mixedCardsArr.length -1 ) {
            setActiveCardIndex(activeCardIndex + 1);
        } else {
            setActiveCardIndex(0);
        }
    }


    const getCards = (index) => {
        if (cardsDataIsLoading) return <div>card is loading...</div>
        if (cardsDataError) {
            console.error(cardsDataError);
            return <div>Ops! Something went wrong</div>
        }
        if (!!cardsData.length) {
            const activeCard = mixedCardsArr[index];
            console.log('activeCard is' ,activeCard, 'activeCardIndex', activeCardIndex);
            return (
                <MemoryCard keyProps={index} activeCardName={activeCard.cardName}
                activeCardDecoding={activeCard.cardDecoding} buttonVisible={false}/>
            )
        }
        return <div>no cards yet</div>
    }

    return (
        <StyledStudyPage>
            <div className={'title'}>Study bundle {bundleID}</div>
            <div className={'cards-box'}>
                {getCards(activeCardIndex)}
            </div>
            <div className={'buttons-box'}>
                <button className={'i-know button'} onClick={handleIKnowButton}>I know!</button>
                <button className={'i-do-not-know button'} onClick={handleIDoNotKnow}>I don't know :(</button>
            </div>
        </StyledStudyPage>
    );
};

export default StudyPage;