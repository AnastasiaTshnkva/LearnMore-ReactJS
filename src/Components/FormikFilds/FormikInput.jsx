import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useField} from "formik";

const StyledFormikInput = styled.div`
    background-color: ${props => props.theme.partBackgroundColor};
`

const FormikInput = (props) => {
    const {field, meta, helpers} =useField(props);

    return (
        <StyledFormikInput>
           <input type={'text'} {...field} {...props}/>
        </StyledFormikInput>
    )
}

FormikInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}

export default FormikInput;