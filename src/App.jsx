import React from "react";
import CreateMemoryCard from "./CreateMemoryCard";
// import CreateMemoryCard from "./CreateMemoryCard";

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'app'}>
                <div className={'header'}>Header</div>
                <div className={'body'}>
                    <CreateMemoryCard/>
                </div>
                <div className={'footer'}>Footer</div>
            </div>
        )
    }
}

export default App;