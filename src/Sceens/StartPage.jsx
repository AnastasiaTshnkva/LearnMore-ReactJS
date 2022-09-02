import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledStartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
  .description{
    display: block;
    width: 60%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 22px;
  }
  .advantage__item {
    height: 250px;
    width: 100%;
    margin-right: 30px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .advantage__title {
      display: block;
      justify-self: center;
      padding: 15px;
      font-size: 20px;
      line-height: 22px;
      //width: 50vw;
      text-align: center;
    }
    .advantage__img {
      //width: 49vw;
      height: 100%;
    }
  }
  .buttons-box {
    //display: grid;
    //grid-template-columns: repeat(2, 1fr);
    display: flex;
    justify-content: space-around;
    width: 100vw;
    margin-top: 15px;
    margin-bottom: 30px;
    .button {
      background-color: ${props => props.theme.buttonColor};
      padding: 10px 15px;
      color: ${props => props.theme.lightTextColor};
      font-size: 18px;
      line-height: 22px;
      border: 2px solid ${props => props.theme.mainBackgroundColor};
      border-radius: 3px;
      margin-top: 10px;
      &:hover {
        box-shadow: 0 0 5px ${props => props.theme.buttonHoverShadow};
      }
      &:active {
        background-color: ${props => props.theme.buttonColor};
      }
    }
  }
`

const StartPage = () => {
    return (
        <StyledStartPage>
            <h1 className={'title'}>Hi!</h1>
            <p className={'description'}>We love learning new things, but flashcards are awkward to carry around. We've come up with a solution! Now all the cards are saved here!</p>
            <div className={'advantages-box'}>
                <div className={'advantage__item'}>
                    <p className={'advantage__title'}>You can add categories to separate your cards</p>
                    <img src={'https://fotosale.by/wp-content/uploads/2020/07/superior-7100.jpg'} className={'advantage__img'}/>
                </div>
                <div className={'advantage__item'}>
                    <img src={'https://fotosale.by/wp-content/uploads/2020/07/superior-7100.jpg'} className={'advantage__img'}/>
                    <p className={'advantage__title'}>You can add bundles of cards to study</p>
                </div>
                <div className={'advantage__item'}>
                    <p className={'advantage__title'}>You can learn flashcards and watch your progress</p>
                    <img src={'https://fotosale.by/wp-content/uploads/2020/07/superior-7100.jpg'} className={'advantage__img'}/>
                </div>
            </div>
            <div className={'buttons-box'}>
                <Link to={'/login'}><button type={'button'} className={'button'}>Login</button></Link>
                <Link to={'/login'}><button type={'button'} className={'button'}>Join</button></Link>
            </div>
        </StyledStartPage>
    )
};

export default StartPage;