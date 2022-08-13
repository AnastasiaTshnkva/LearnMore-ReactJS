import React from "react";
import styled from 'styled-components';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchInput from "../Components/SearchhInput";


const StyledListsLayout = styled.div`
  .main {
    min-height: calc(100vh - 80px - 50px);
    display: flex;
    flex-direction: column;
    background-color: ${props => {return props.theme.mainBackgroundColor}};
    align-items: center;
    .button{
      background-color: ${props => props.theme.buttonColor};
      padding: 7px;
      color: ${props => props.theme.lightTextColor};
      font-size: 18px;
      line-height: 22px;
      border: 2px solid ${props => props.theme.mainBackgroundColor};
      border-radius: 3px;
      align-self: end;
      margin-right: 30px;
      margin-top: 20px;
      &:hover {
        box-shadow: 0 0 5px ${props => props.theme.buttonHoverShadow};
      }
      &:active {
        background-color: ${props => props.theme.buttonColor};
      }
    }
  }
`

const ListsLayout = (props) => {
    return (
        <StyledListsLayout>
            <Header/>
            <div className={'main'}>
                <button className={'button'} type={'button'}>+New</button>
                <SearchInput/>
                {props.children}
            </div>
            <Footer/>
        </StyledListsLayout>
    );
}

export default ListsLayout;

