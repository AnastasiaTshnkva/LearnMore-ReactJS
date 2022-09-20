import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik'
import FormikInput from 'Components/FormikFilds/FormikInput';
import { setNotValidUserAction, setValidUserAction } from 'store/actions/userActionCreators';
import { REVIEW_LOGIN_PAGE } from 'constants/reviews/reviewLoginPage';
import getUsersThunk from 'store/thunk/users/getUsersThunk';
import { showUserData } from 'store/selectors/selectors';
import postNewUserThunk from "../store/thunk/users/postNewUserThunk";

const StyledLoginPage = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  color: ${props => {return props.theme.textColor}};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to right, ${props => props.theme.loginBackgroundColorLeft}, ${props => props.theme.loginBackgroundColorRight});
  .main{
    display: flex;
  justify-content: center;
  width: 35vw;
  min-height: 50vh;
  border: solid 3px ${props => props.theme.loginWindowBorder};
  border-radius: 3px;
  background-color: ${props => props.theme.mainBackgroundColor};
    .form {
      width: 100%;
      padding: 10px;
      .title {
        display: block;
        margin-top: 30px;
        text-align: center;
        font-size: 22px;
      }
    }
      .button {
        padding: 10px;
        margin-top: 20px;
        border: 2px solid ${props => props.theme.mainBackgroundColor};
        border-radius: 3px;
        width: 100%;
        color: ${props => props.theme.lightTextColor};
        font-size: 22px;
        font-weight: 400;
        background-color: ${props => props.theme.buttonColor};
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 5px ${props => props.theme.buttonHoverShadow};
        }
        &:active {
          background-color: ${props => props.theme.buttonColor};
        }
      }
      .help {
        padding: 10px;
        display: flex;
        justify-content: space-around;
        .text {
        display: block;
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        cursor: pointer;
        text-decoration: underline;
        &:hover {
          color: ${props => props.theme.accentTextColor};
        } 
        } 
      } 
    }
  }
  .validate-error-box {
    font-size: 12px;
    line-height: 14px;
    color: #FF0000FF;
    margin-top: 5px;
    margin-left: 5px;
  }
`

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [usersData, setUsersData] = useState();
    const [validateError, setValidateError] = useState('');
    const userDataFromState = useSelector(showUserData);
    const [newUserRegistration, setNewUserRegistration] = useState(false);

   useEffect(() => {
       dispatch(getUsersThunk());
   },[]);

   useEffect(() => {
       setUsersData(userDataFromState);
   }, [userDataFromState])

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementsByName('email')[0].value;
        const password = document.getElementsByName('password')[0].value;
        if(!newUserRegistration) {
            const user = {
                email,
                password,
            };
            const currentUserData = usersData.find((element) => element.userEmail === user.userEmail);
            if(currentUserData
                && (
                    currentUserData.userPassword === user.userPassword)) {
                dispatch(setValidUserAction(
                    {
                        email: user.email,
                    }));
                navigate('/categoryList');
            } else {
                dispatch(setNotValidUserAction());
                setValidateError(REVIEW_LOGIN_PAGE.INVALID_VALUES_ERROR_MASSAGE);
            }
        }
        if(newUserRegistration) {
            const name = document.getElementsByName('name')[0].value;
            const newUser = {
                id: uuidv4(),
                name,
                email,
                password,
            }
            dispatch(postNewUserThunk(newUser, usersData));
            dispatch(setValidUserAction(
                {
                    email: newUser.email,
                }));
            navigate('/categoryList');
        }
    };

   const handleRedirectUser = () => {
       if(!newUserRegistration) {
           setNewUserRegistration(true);
       }
       if(newUserRegistration) {
           setNewUserRegistration(false);
       }
   };

    return (
        <StyledLoginPage>
            <main className={'main'}>
                <Formik className={'login-page'}>
                    <Form className={'form'} onSubmit={handleOnSubmit}>
                        <h2 className={'title'}>{REVIEW_LOGIN_PAGE.FORM_TITLE}</h2>
                        {newUserRegistration &&
                            <FormikInput name={'name'} placeholder={REVIEW_LOGIN_PAGE.PLACEHOLDER_TO_NAME_INPUT} type={'text'}/>
                        }
                        <FormikInput name={'email'} placeholder={REVIEW_LOGIN_PAGE.PLACEHOLDER_TO_EMAIL_INPUT} type={'email'}/>
                        <FormikInput name={'password'} placeholder={REVIEW_LOGIN_PAGE.PLACEHOLDER_TO_PASSWORD_INPUT} type={'password'}/>
                        {validateError ? <div className={'validate-error-box'}>{validateError}</div> : null}
                        <button type={'submit'} className={'button'}>{!newUserRegistration ? REVIEW_LOGIN_PAGE.BUTTON_INNER_TEXT_LOGIN : REVIEW_LOGIN_PAGE.BUTTON_INNER_TEXT_SIGN_UP}</button>
                        <div className={'help'}>
                            <p className={'text'} onClick={handleRedirectUser}>{!newUserRegistration ?
                                REVIEW_LOGIN_PAGE.LINK_TO_SIGH_UP : REVIEW_LOGIN_PAGE.LINK_TO_LOGIN}</p>
                        </div>
                    </Form>
                </Formik>
            </main>
        </StyledLoginPage>
    )
}

LoginPage.prototype = {
    userName: PropTypes.string.isRequired,
};

LoginPage.defoltprops ={
};

export default LoginPage;


