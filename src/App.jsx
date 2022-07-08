import React from "react";
import Header from "./MainLayout/Components/Header"
import Body from "./Components/Body";
import MainLayout from "./MainLayout/MainLayout";
import Footer from "./MainLayout/Components/Footer";
import styled from 'styled-components';

// export const AppStyles = styled.div`
//   $main_color: white;
//   $main_text_color: black;
//   $header_color: rgb(70, 84, 70);
//   $header_text_color: white;
// `

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'app'}>
                <Header/>
                <MainLayout/>
                <Footer/>
            </div>
        )
    }
}

export default App;