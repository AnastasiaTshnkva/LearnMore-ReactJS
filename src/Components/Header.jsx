import React from "react";

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'header'}>
                <h1>Learn more</h1>
                <p>description</p>
                <p>avatar</p>
                {/*<img src={''}>*/}
            </div>
        )
    }
};

export default Header;