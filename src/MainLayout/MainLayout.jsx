import React from "react";
import styled from 'styled-components';
import Body from "../Sceens/LearningMemoryCards";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "../Sceens/Login";
import LoginPage from "../Sceens/Login";

const StyledMainLayout = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  color: ${props => {return props.theme.textColor}};
  
  .main {
    min-height: calc(100vh - 80px - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => {return props.theme.backgroundColor}};
  }
`

const MainLayout = (props) => {
    return (
        <StyledMainLayout>
            <Header/>
            <div className={'main'}>
                {/*<LoginPage/>*/}
                {props.children}
            </div>
            <Footer/>
        </StyledMainLayout>
    );
}

export default MainLayout;

