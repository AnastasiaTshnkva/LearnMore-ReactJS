import React from 'react';

class LessonCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"boby"}>
                <div>{this.props.name}</div>
                <div>{this.props.description}</div>
                <div>{this.props.date}</div>
            </div>
        )
    }
}
export default LessonCard;