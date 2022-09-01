import React from "react";
import styled from 'styled-components';

const StyledAddButton = styled.button`
  background-color: ${props => props.theme.buttonColor};
  padding: 7px;
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
`

const AddButton = (props) => {
    return(
        <StyledAddButton className={'button'} type={props.type} onClick={props.onClickProps ? props.onClickProps : null}>{props.title}</StyledAddButton>
    )
}

export default AddButton;