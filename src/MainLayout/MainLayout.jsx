import React from "react";
import styled from 'styled-components';
import Body from "../Components/Body";

const MainLayoutStyles = styled.div`
 margin: 0 auto;
`

class MainLayout extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MainLayoutStyles>
                <Body/>
            </MainLayoutStyles>
        );
    }
}

export default MainLayout;

