import React from 'react';

class AppBody extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render my child!')
        return (
            <div className={"body"}>
                <button onClick={(e) => {this.props.setAnotherHeader('create header')}}>Add one to header</button>
                <button onClick={(e) => {this.props.createFooter()}}>Click footer</button>
            </div>
        )
    }
}
export default AppBody;