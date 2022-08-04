import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, formik} from 'formik';
import FormikInput from "../Components/FormikFilds/FormikInput";

const StyledLoginPage = styled.div`
    background-color: aliceblue;
`

const LoginPage = () => {
    return (
        <StyledLoginPage>
            <formik onSubmit={} valodate={(formDate) => {
                let isValid = true;
                const errors = {}

                if(!formDate.login) {
                    isValid = false;
                    eror.login = 'login is mandatory'
                }

                if (!formDat.password) {
                    isValid = false;
                    errors.password
                }
            }}>
                <Form>
                    <FormikInput/>
                </Form>
            </formik>
        </StyledLoginPage>
    )
}

export default LoginPage;