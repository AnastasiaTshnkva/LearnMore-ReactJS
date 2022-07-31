import React from "react";
import styled from 'styled-components';

const StyledCreateMemoryCard = styled.div`
  width: 300px;
  height: 150px;
`

const CreateMemoryCard = () => {
    return (
        <StyledCreateMemoryCard>
            <input type={'text'}></input>
            <input type={'text'}></input>
        </StyledCreateMemoryCard>
        )
}

export default CreateMemoryCard;