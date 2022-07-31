import React from "react";
import styled from 'styled-components';
import Body from "../MainLayout/Components/Body";
import Header from "../MainLayout/Components/Header";
import Footer from "../MainLayout/Components/Footer";

const StyledMainLayout = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  color: ${props => {return props.theme.textColor}};
`

class MainLayout extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledMainLayout>
                <Header/>
                <Body/>
                <Footer/>
            </StyledMainLayout>
        );
    }
}

export default MainLayout;

