import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, formik, useField} from 'formik'

const StyledFormikInput = styled.div`
    background-color: aliceblue;
`

const FormikInput = () => {
    return (
        <StyledFormikInput>
           <input/>
        </StyledFormikInput>
    )
}

export default FormikInput;