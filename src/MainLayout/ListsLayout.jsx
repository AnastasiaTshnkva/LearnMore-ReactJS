import React from "react";
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchInput from "../Components/SearchhInput";
import GlobalModalProvider from "../HOC/GlobalModalProvider";


const StyledListsLayout = styled.div`
  .main {
    min-height: calc(100vh - 80px - 50px);
    display: flex;
    flex-direction: column;
    background-color: ${props => {return props.theme.mainBackgroundColor}};
    align-items: center;
    .search {
      margin-top: 20px;
    }
  }
`

const ListsLayout = (props) => {
    return (
        <GlobalModalProvider>
            <StyledListsLayout>
                <Header/>
                <main className={'main'}>
                    {/*<SearchInput className={'search'}/>*/}
                    <Outlet/>
                    {/*{props.children}*/}
                </main>
                <Footer/>
            </StyledListsLayout>
        </GlobalModalProvider>

    );
}

export default ListsLayout;

