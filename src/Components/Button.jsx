import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledButton = styled.div`
  .button{
    //position: fixed;
    //top: ;
      background-color: ${props => props.theme.buttonColor};
      padding: 7px;
      color: ${props => props.theme.lightTextColor};
      font-size: 18px;
      line-height: 22px;
      border: 2px solid ${props => props.theme.mainBackgroundColor};
      border-radius: 3px;
      &:hover {
        box-shadow: 0 0 5px ${props => props.theme.buttonHoverShadow};
      }
      &:active {
        background-color: ${props => props.theme.buttonColor};
      }
    }
`

const Button = (props) => {
    return (
        <StyledButton>
            <button type={'button'} name={props.name} className={'button'} {...props}>{props.name}</button>
        </StyledButton>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Button;

