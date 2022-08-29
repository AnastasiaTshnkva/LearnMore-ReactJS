import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, Formik} from 'formik';
import FormikInput from "../Components/FormikFilds/FormikInput";
import { useNavigate } from 'react-router-dom';

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
      .input {
        margin-top: 30px;
        width: 100%;
        border: 1px solid ${props => props.theme.inputBorderColor};
        padding: 7px;
        border-radius: 3px;
        &:focus {
          outline: none;
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
    const navigate = useNavigate();

    return (
        <StyledLoginPage>
            <Formik className={'login-page'} onSubmit={() => {
                useNavigate('/List');
            }} validate={(formData) => {
                let isValid = true;
                const errors = {};

                if(!formData.login) {
                    isValid = false;
                    errors.login = 'login is mandatory';
                }
                if(!formData.password) {
                    isValid = false;
                    errors.password = 'password is mandatory';
                }

                if (!isValid) return errors;
            }}>
                <Form className={'form'}>
                    <h2 className={'title'}>Log in to LearnMore</h2>
                    <FormikInput name={'email'} placeholder={'input login'} type={'email'} className={'input'}/>
                    <FormikInput name={'password'} placeholder={'input password'} type={'password'} className={'input'}/>
                    <button type={'submit'} className={'button'}>Login</button>
                    <div className={'help'}>
                        <p className={'text'}>Help me!</p>
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



