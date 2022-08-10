import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, Formik} from 'formik';
import FormikInput from "../Components/FormikFilds/FormikInput";
import { useNavigate } from 'react-router-dom';

const StyledLoginPage = styled.div`
    background-color: ${props => props.theme.partBackgroundColor};
`

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <StyledLoginPage>
            <Formik onSubmit={() => {
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
                <Form>
                    <FormikInput name={'login'} placeholder={'input login'} type={'email'}/>
                    <FormikInput name={'password'} placeholder={'input password'} type={'password'}/>
                    <button type={'submit'}>Login</button>
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



