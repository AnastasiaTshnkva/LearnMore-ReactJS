import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFormikInput = styled.input`
  margin-top: 25px;
  width: 100%;
  border: 1px solid ${props => props.theme.inputBorderColor};
  padding: 7px;
  border-radius: 3px;
  color: ${props => props.theme.loginWindowTextColor};
  background-color: ${props => props.theme.loginWindowBackground};
  &::placeholder {
    color: ${props => props.theme.loginWindowTextColor};
  }
  &:focus {
    outline: none;
  }
`

const FormikInput = (props) => {
    return (
        <StyledFormikInput type={props.type} name={props.name} placeholder={props.placeholder}
        value={props.value} onChange={props.onChangeProps ? props.onChangeProps : null}>
        </StyledFormikInput>
    )
};

FormikInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

export default FormikInput;