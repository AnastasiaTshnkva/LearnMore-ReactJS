import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import FormikInput from "../Components/FormikFilds/FormikInput";
import { useDispatch } from "react-redux";
import checkUsersLogin from "scripts/checkUsersLogin";
import {setNotValidUserAction, setValidUserAction} from "store/actions/userActionCreators";
import {fetchUsersDate} from "api/fakeServer/Api";

const StyledLoginPage = styled.div`
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
        margin-top: 30px;
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
`

const LoginPage = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState();
    // const navigate = useNavigate();
    // const userLoggedIn = useSelector(isLoggedIn);

   useEffect(() => {
        fetchUsersDate().then(({data}) => {
            setUserData(data)
        });
   },[]);

    const handleOnSubmit = (event) => {
        event.nativeEvent.preventDefault();
        const userName = document.getElementsByName('name')[0].value;
        const userEmail = document.getElementsByName('email')[0].value;
        const userPassword = document.getElementsByName('password')[0].value;
        const user = {
            userName,
            userEmail,
            userPassword,
        };
        const isUserLogIn = checkUsersLogin(user, userData);
        // const currentUserData = userData.filter(() => {
        //
        //    }
        // }
        console.log(isUserLogIn);
        if(isUserLogIn) {
            dispatch(setValidUserAction());
        } else {
            dispatch(setNotValidUserAction());
        }
    };

    const handleValidate = (formData) => {
        let isValid = true;
        const errors = {};

        if(!formData.email) {
            isValid = false;
            errors.email = 'email is mandatory';
        }
        if(!formData.password) {
            isValid = false;
            errors.password = 'password is mandatory';
        }

        if (!isValid) return errors;
    };

    return (
        <StyledLoginPage>
            <Formik className={'login-page'} validate={handleValidate}>
                <Form
                    className={'form'}
                    onSubmit={handleOnSubmit}
                >
                    <h2 className={'title'}>Log in to LearnMore</h2>
                    <FormikInput name={'name'} placeholder={'input name'} type={'text'}/>
                    <FormikInput name={'email'} placeholder={'input email'} type={'email'}/>
                    <FormikInput name={'password'} placeholder={'input password'} type={'password'}/>
                    <button type={'submit'} className={'button'}>Login</button>
                    <div className={'help'}>
                        {/*<p className={'text'}>Help me!</p>*/}
                        <p className={'text'}>Sign up</p>
                    </div>
                </Form>
            </Formik>
        </StyledLoginPage>
    )
}

LoginPage.prototype = {
    userName: PropTypes.string.isRequired,
};

LoginPage.defoltprops ={
};

export default LoginPage;


