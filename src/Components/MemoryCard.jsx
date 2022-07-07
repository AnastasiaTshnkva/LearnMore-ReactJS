import React from "react";

class MemoryCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'memoryCard'}>
                <div className={'memoryCard__front-side'}>
                    <h2 className={'memoryCard__name'}>Card name</h2>
                </div>
                <div className={'memoryCard__back-side'}>
                    <p className={'memoryCard__translation'}>Card translation</p>
                </div>

            </div>
        )
    }
}

export default MemoryCard;