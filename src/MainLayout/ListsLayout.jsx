import React from "react";
import styled from 'styled-components';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchInput from "../Components/SearchhInput";
import AddButton from "../Components/AddButton";


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
        <StyledListsLayout>
            <Header/>
            <div className={'main'}>
                {/*<AddButton className={'button'}/>*/}
                <SearchInput className={'search'}/>
                {props.children}
            </div>
            <Footer/>
        </StyledListsLayout>
    );
}

export default ListsLayout;
