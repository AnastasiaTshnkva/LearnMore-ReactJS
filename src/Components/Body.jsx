import React from "react";
import MemoryCard from "./MemoryCard";
import CreateMemoryCard from "../HOC/CreateMemoryCard";

class Body extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className={'body'}>
                    <button>Add card</button>
                </div>
            )
    }
}

export default Body;

