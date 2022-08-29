import React from 'react';
import styled from 'styled-components';

const StyledGlobalSpinner =  styled.div`
  width: 100vw;
  min-height: 100vh;
  top: 50vh;
  left: 50vw;
  margin-left: -50vw;
  margin-top: -50vh;
  font-size: 30px;
  line-height: 36px;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.mainBackgroundColor};
`

const GlobalSpinner = () => {
    return (
        <StyledGlobalSpinner>
            Loading ...
        </StyledGlobalSpinner>

    )
}

export default GlobalSpinner;