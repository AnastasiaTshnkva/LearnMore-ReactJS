import React from "react";
import styled from 'styled-components';
import Body from "../Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const StyledMainLayout = styled.div`
 margin: 0 auto;
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

