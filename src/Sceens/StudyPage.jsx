import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {Navigate, useParams} from 'react-router-dom';
import MemoryCard from 'Components/MemoryCard';
import {useDispatch, useSelector} from "react-redux";
import {showCardsDataError, showCardsDataFromStore, showCardsDataIsLoading} from "store/selectors/selectors";
import {fetchBundleOfCardsData} from "api/fakeServer/Api";
import {
    getBundleOfCardFailureAction,
    getBundleOfCardSuccessAction,
    setBundleOfCardsRequestAction
} from "store/actions/bundleOfCardsCreators";
import {ROUTES_NAMES} from "../constants/routes/routes";

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
    width: 40%;
  }
  .buttons-box {
    margin-top: 30px;
    .button  {
      padding: 10px;
      border: none;
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
    const { bundleID } = useParams();
    const { categoryID } = useParams();
    const [cardsData, setCardsData] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const cardsDataIsLoading = useSelector(showCardsDataIsLoading);
    const cardsDataError = useSelector(showCardsDataError);
    const cardsDataFromStore = useSelector(showCardsDataFromStore);

    const getCardsDataFromServer = () => {
        fetchBundleOfCardsData(bundleID)
            .then(({data}) => {
                dispatch(getBundleOfCardSuccessAction(data))
            })
            .catch((error) => {
                dispatch(getBundleOfCardFailureAction(error))
            });
    }

    useEffect(() => {
        dispatch(setBundleOfCardsRequestAction());
        getCardsDataFromServer()
    },[])

    useEffect(() => {
        setCardsData(cardsDataFromStore);
    }, [cardsDataFromStore])

    const cardsArr = cardsData.slice();
    const mixedCardsArr = cardsArr.sort(() => Math.random() - 0.5);

    const getCards = (index) => {
        if (cardsDataIsLoading) return <div>card is loading...</div>
        if (cardsDataError) {
            console.error(cardsDataError);
            return <div>Ops! Something went wrong</div>
        }
        if (!!cardsData.length) {
            const activeCard = mixedCardsArr[index];
            return (
                <MemoryCard key={index} activeCardName={activeCard.cardName}
                            activeCardDecoding={activeCard.cardDecoding}/>
            )
        }
        return <div>no cards yet</div>
    }

    const handleIKnowButton = () => {
        if(activeCardIndex < mixedCardsArr.length && mixedCardsArr.length) {
            mixedCardsArr[activeCardIndex].answersCounter += 1;
            console.log(mixedCardsArr[activeCardIndex].answersCounter);
            mixedCardsArr.splice(activeCardIndex, 1);
            setActiveCardIndex(activeCardIndex + 1);
        }
        if(!mixedCardsArr.length) {
            console.log(mixedCardsArr);
            return <Navigate to={`${ROUTES_NAMES.CATEGORIES}/${categoryID}/bundle/${bundleID}`}/>
        }
    }

    const handleIDoNotKnow = () => {
        console.log('I do not know');
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