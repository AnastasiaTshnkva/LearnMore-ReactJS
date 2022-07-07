import React from "react";

class CreateMemoryCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'createMemoryCard'}>
                <input type={'text'}></input>
                <input type={'text'}></input>
            </div>
        )
    }
}

export default CreateMemoryCard;