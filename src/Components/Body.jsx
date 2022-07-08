import React from "react";
import styled from 'styled-components';
import MemoryCard from "./MemoryCard";
import Buttons from "./Buttons";

const BodyStyles = styled.div`
  .body{
    height: calc(100vh - 66px - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    }
`



class Body extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <BodyStyles>
                <div className={'body'}>
                    <Buttons innerText={'Add card'}></Buttons>
                    <MemoryCard name={'card 1'} translation={'translation 1'}></MemoryCard>
                    <MemoryCard name={'card 2'} translation={'translation 2'}></MemoryCard>
                    <MemoryCard name={'card 3'} translation={'translation 3'}></MemoryCard>
                </div>
            </BodyStyles>
        )
    }
}

export default Body;

