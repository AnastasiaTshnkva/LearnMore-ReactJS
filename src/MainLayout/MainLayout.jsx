import React from "react";
import styled from 'styled-components';
import Body from "../Components/Body";

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
                <Body/>
            </StyledMainLayout>
        );
    }
}

export default MainLayout;

