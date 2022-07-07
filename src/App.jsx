import React from "react";
import Header from "./Components/Header"
import Body from "./Components/Body";
import Footer from "./Components/Footer";

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'app'}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default App;