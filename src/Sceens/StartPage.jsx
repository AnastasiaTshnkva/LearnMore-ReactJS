import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { REVIEW_START_PAGE } from 'constants/reviews/reviewStartPage';
import { ROUTES_NAMES } from 'constants/routes/routes';

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
    //.advantage__title {
    //  display: block;
    //  justify-self: center;
    //  padding: 15px;
    //  font-size: 20px;
    //  line-height: 22px;
    //  text-align: center;
    //}
    //.advantage__img {
    //  height: 100%;
    //}
  }
  .advantage__title {
    display: block;
    justify-self: center;
    padding: 15px;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }
  .buttons-box {
    display: flex;
    justify-content: space-around;
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
            <h1 className={'title'}>{REVIEW_START_PAGE.MAIN_TITLE}</h1>
            <p className={'description'}>{REVIEW_START_PAGE.MAIN_DESCRIPTION}</p>
            <div className={'advantages-box'}>
                <p className={'advantage__title'}>{REVIEW_START_PAGE.ADVANTAGES_DESCRIPTION_ABOUT_CATEGORIES}</p>
                <p className={'advantage__title'}>{REVIEW_START_PAGE.ADVANTAGES_DESCRIPTION_ABOUT_BUNDLES}</p>
                <p className={'advantage__title'}>{REVIEW_START_PAGE.ADVANTAGES_DESCRIPTION_ABOUT_CARDS}</p>
                <p className={'advantage__title'}>{REVIEW_START_PAGE.ADVANTAGES_DESCRIPTION_ABOUT_CONCLUSION}</p>
                {/*<div className={'advantage__item'}>*/}
                {/*    <p className={'advantage__title'}>{REVIEW_START_PAGE.ADVANTAGES_DESCRIPTION_ABOUT_CATEGORIES}</p>*/}
                {/*    <img src={'https://fotosale.by/wp-content/uploads/2020/07/superior-7100.jpg'} className={'advantage__img'}/>*/}
                {/*</div>*/}
                {/*<div className={'advantage__item'}>*/}
                {/*    <img src={'https://fotosale.by/wp-content/uploads/2020/07/superior-7100.jpg'} className={'advantage__img'}/>*/}
                {/*    <p className={'advantage__title'}>{REVIEW_START_PAGE.ADVANTAGES_DESCRIPTION_ABOUT_BUNDLES}</p>*/}
                {/*</div>*/}
                {/*<div className={'advantage__item'}>*/}
                {/*    <p className={'advantage__title'}>{REVIEW_START_PAGE.ADVANTAGES_DESCRIPTION_ABOUT_CARDS}</p>*/}
                {/*    <img src={'https://fotosale.by/wp-content/uploads/2020/07/superior-7100.jpg'} className={'advantage__img'}/>*/}
                {/*</div>*/}
            </div>
            <div className={'buttons-box'}>
                <Link to={ROUTES_NAMES.LOGIN}><button type={'button'} className={'button'}>{REVIEW_START_PAGE.LOGIN_BUTTON_INNER_TEXT}</button></Link>
            </div>
        </StyledStartPage>
    )
};

export default StartPage;